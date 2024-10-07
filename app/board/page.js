import { connectDB } from '@/util/database';
import * as globalStyles from "../styles/global.css";
import * as pageStyles from '../styles/Pages.css';
import { BoardTable } from "../components/Table";

export default async function Board(){
  const db = (await connectDB).db('board');
  const result = await db.collection('post').find().toArray();
  const tableTit = ['No.', '제목', '작성자', 'Date', '좋아요'];
  
  return(
    <>
      <div className={globalStyles.contTitle}>
        <h4 className={globalStyles.secTit}>게시판 리스트</h4>
      </div>
      <div className={globalStyles.contWrap}>
        <BoardTable columns={tableTit} data={result} />
      </div>
    </>
  )
}

