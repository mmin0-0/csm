import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  // if (req.method === 'POST') {
  //   if(comment){}
    const db = (await connectDB).db('board');
    const commentId = new ObjectId(req.body._id);
    const comment = await db.collection('comment').findOne({ _id: commentId });

    console.log("세션 정보:", session);
    console.log(comment)

    // if (comment && comment.email === session.user.email) {
    //   const modify = { content: req.body.content };
    //   const result = await db.collection('comment').updateOne(
    //     { _id: new ObjectId(req.body._id) },
    //     { $set: modify }
    //   );

    //   return res.status(200).json({ ...comment, content: req.body.content });
    // } else {
    //   return res.status(403).json({ message: "댓글 수정 권한이 없습니다." });
    // }
}
  
  // return res.status(405).json({ message: "Method not allowed." });
