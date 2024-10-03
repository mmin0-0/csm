import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if(req.method == 'POST'){
    const db = (await connectDB).db('board');
    const post = await db.collection('post').findOne({_id: new ObjectId(req.body._id)});
    
    try{
      if(!session || (session.user.role !== 'admin' && post.author !== session.user.email)){
        return res.status(403).json({ message: '작성자 또는 관리자만 수정 가능합니다.' });
      }
  
      const modify = {title: req.body.title, content: req.body.content};

      const result = await db.collection('post').updateOne(
        {_id: new ObjectId(req.body._id)},
        {$set: modify}
      );
      return res.status(200).redirect('/board')
    }catch(error){
      return res.status(500).json({message: error})
    }
  }
}