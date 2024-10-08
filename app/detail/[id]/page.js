import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import * as globalStyles from '../../styles/global.css';
import * as tableStyles from '../../styles/components/Table.css';
import * as pageStyles from '../../styles/Pages.css';
import { BoardControls } from '../../components/Button';
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db('board');
  const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});

  return (
    <>
      <div className={globalStyles.contTitle}>
        <h4 className={globalStyles.secTit}>게시글 조회하기</h4>
        <div className={globalStyles.btnWrap}>
          <BoardControls result={result} />
        </div>
      </div>
      <div className={globalStyles.contWrap}>
        <div className={tableStyles.boardWrap}>
          <div className="table-wrap">
            <table className={tableStyles.boardTable}>
              <caption>게시글 조회하기</caption>
              <colgroup>
                <col width="180px" />
                <col width="auto" />
                <col width="180px" />
                <col width="auto" />
              </colgroup>
              <tbody>
                <tr>
                    <th><div>Type</div></th>
                    <td><div>
                      {
                        result.postType == 'general' ? (<>게시글</>):(<>공지</>)
                      }
                      {/* {result.postType} */}
                      </div></td>
                    <th><div>작성일</div></th>
                    <td><div>{result.createAt.split(' ')[0]}</div></td>
                </tr>
                <tr>
                    <th><div>작성자</div></th>
                    <td><div>{result.author}</div></td>
                    <th><div>조회수</div></th>
                    <td><div>1</div></td>
                </tr>
                <tr>
                    <th><div>제목</div></th>
                    <td colSpan={3}><div>{result.title}</div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={tableStyles.boardCont}>
            <p>
              {
                result.content.split('\n').map  ((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))
              }
            </p>
          </div>
          <Comment _id={result._id.toString()}/> 
        </div>
      </div>
    </>
  )
}