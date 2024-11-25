import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
  if(req.method == 'POST'){
    try{
      const session = await getServerSession(req, res, authOptions);
      if(!session){
        return res.status(403).json('로그인 후 이용이 가능합니다.')
      }

      const db = (await connectDB).db('board');
      const target = await db.collection('post').findOne({ _id : new ObjectId(req.body)});
  
      if (target.author !== session.user.email && session.user.role !== 'admin') {
        return res.status(403).json('작성자 또는 관리자만 삭제 가능합니다.');
      }

      const result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)});
      return res.status(200).redirect('/board');
      
    }catch(error){
      return res.status(500).json({error: '서버 오류 발생'});
    }
  }
}