import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
  if(req.method === 'POST'){
    const session = await getServerSession(req, res, authOptions);
    console.log(session)
    try{
      const db = (await connectDB).db('board');
      const target = await db.collection('comment').findOne({ _id : new ObjectId(req.body)});

      if (!session || (session.user.role !== 'admin' && target.author !== session.user.email)) {
        return res.status(403).json('작성자 또는 관리자만 삭제 가능합니다.');
      }

      const result = await db.collection('comment').deleteOne({_id: new ObjectId(req.body)});
      return res.status(200).json('삭제완료');
    }catch(error){
      return res.status(500).json(error);
    }
  }
}