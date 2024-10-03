import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import * as globalStyles from "../../styles/global.css";
import * as pageStyles from '../../styles/Pages.css';
import { ListLink, ButtonType01 } from '../../components/Button';
import {formWrap} from '../../data';

export default async function Edit(props){
  const db = (await connectDB).db('board');
  const result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});

  const defaultValue = {
    author: result.author || '',
    title: result.title || '',
    content: result.content || '',
    file: result.file || ''
  };

  return(
    <>
      <div className={globalStyles.contTitle}>
        <h4 className={globalStyles.secTit}>게시글 수정하기</h4>
      </div>
      <div className={globalStyles.contWrap}>
        <div className={pageStyles.contBox}>
          <form action="/api/post/edit" method="POST">
          <input name="_id" defaultValue={result._id.toString()} className={globalStyles.hide} />
            {
              formWrap.map((form, idx)=>{
                return (
                  <div className={globalStyles.formGroup}>
                    <label htmlFor={`write_${form.id}`} className={`${globalStyles.label} ${form.id !== 'file' ? globalStyles.ess : ''}`}>{form.title}</label>
                    {
                      form.id === 'content' ? (
                        <textarea 
                          className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.textarea}`}
                          id={`write_${form.id}`} 
                          name={form.id} 
                          defaultValue={defaultValue[form.id]}
                        />
                      ):(
                        <input 
                          className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.text}`}
                          type={form.type} 
                          id={`write_${form.id}`} 
                          name={form.id}
                          defaultValue={defaultValue[form.id]}
                          required={form.state === 'required'}
                          disabled={form.state === 'disabled'}
                        />
                      )
                    }
                  </div>
                )
              })
            }
            <div className={`${globalStyles.btnWrap} ${pageStyles.btnWrap}`}>
              <ButtonType01 type="submit">수정하기</ButtonType01>
              <ListLink>목록보기</ListLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}