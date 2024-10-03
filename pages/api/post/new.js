import { connectDB } from "@/util/database.js";
import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth].js';

export default async function handler(req, res){
  if(req.method === 'POST'){
    const session = await getServerSession(req, res, authOptions);
    if(session){
      req.body.author = session.user.email;

      const now = new Date();
      const formattedDate = now.getFullYear() + '-' + 
        String(now.getMonth() + 1).padStart(2, '0') + '-' + 
        String(now.getDate()).padStart(2, '0') + ' ' + 
        String(now.getHours()).padStart(2, '0') + ':' + 
        String(now.getMinutes()).padStart(2, '0') + ':' + 
        String(now.getSeconds()).padStart(2, '0');
      
      req.body.createAt = formattedDate;  
      req.body.postType = 'general';
      req.body.name = session.user.name;
    }else{
      return res.status(500).json({ message: '로그인이 필요합니다.'});
    }

    try{
      const db = (await connectDB).db('board');
      const result = await db.collection('post').insertOne(req.body);
      const postCount = await db.collection('post').countDocuments();
      
      req.body.idx = postCount + 1;
      res.redirect(302, '/board');
    }catch(err){
      return res.status(500).json('error');
    }
  }
}