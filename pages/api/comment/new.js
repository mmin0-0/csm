import { connectDB } from "@/util/database"; 
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res){
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user) {
    return res.status(401).json({ error: '로그인이 후 이용가능합니다.' });
  }

  if(req.method == 'POST'){
    req.body = JSON.parse(req.body);
    const now = new Date();
    const koreaTime = new Date(now.setHours(now.getHours() + 9));
    
    const formattedDate = koreaTime.getFullYear() + '-' + 
      String(koreaTime.getMonth() + 1).padStart(2, '0') + '-' + 
      String(koreaTime.getDate()).padStart(2, '0') + ' ' + 
      String(koreaTime.getHours()).padStart(2, '0') + ':' + 
      String(koreaTime.getMinutes()).padStart(2, '0') + ':' + 
      String(koreaTime.getSeconds()).padStart(2, '0');
      
    req.body.createAt = formattedDate;  
    
    let commentInfo = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      email: session.user.email,
      author_name: session.user.name,
      createAt: req.body.createAt
    };
    
    const db = (await connectDB).db('board');
    const result = await db.collection('comment').insertOne(commentInfo);
    res.status(200).json({message: '등록완료'});
  }
}