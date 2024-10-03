import {connectDB} from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res){
  if(req.method == 'POST'){
    const { name, email, password, role } = req.body;
    try{
      const db = (await connectDB).db('board');

      // 비밀번호 암호화
      const hash = await bcrypt.hash(password, 10);
      req.body.password = hash;

      const userInfo = {
        name, 
        email,
        password: hash,
        role: role || 'user'
      };

      // 필수요소 입력
      if(name == ''){
        res.status(400).json('이름을 입력해주세요');
      } else if(email == ''){
        res.status(400).json('이메일을 입력해주세요');
      } else if(password == ''){
        res.status(400).json('비밀번호를 입력해주세요');
      }

      // 이메일 중복검사
      const user = await db.collection('user_cred').findOne({email: email});

      if(user){
        res.status(400).json('이메일중복');
      }else{
        await db.collection('user_cred').insertOne(userInfo);
        return res.status(200).redirect('/');
      }
    }catch(error){
      return res.status(500).json('가입실패', error)
    }
  }
}