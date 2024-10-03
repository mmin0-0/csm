import { connectDB } from "@/util/database";
import * as globalStyles from "../styles/global.css";
import * as pageStyles from '../styles/Pages.css';
import { ListLink, ButtonType01 } from '../components/Button';
import { formWrap } from '../data.js';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WriteAlert } from "../components/Alert";

export default async function Register() {
  const db = (await connectDB).db('board');
  const result = await db.collection('post').find().toArray();
  const session = await getServerSession(authOptions);

  if (!session) {
    return  (
      <WriteAlert />
    )
  }

  return (
    <>
      <div className={globalStyles.contTitle}>
        <h4 className={globalStyles.secTit}>게시글 작성하기</h4>
      </div>
      <div className={globalStyles.contWrap}>
        <div className={pageStyles.contBox}>
          <form action="/api/post/new" method="POST">
            {
              formWrap.map((form) => (
                <div className={globalStyles.formGroup} key={form.id}>
                  <label htmlFor={`write_${form.id}`} className={`${globalStyles.label} ${form.id !== 'file' ? globalStyles.ess : ''}`}>
                    {form.title}
                  </label>
                  {
                    form.type === 'textarea' ? (
                      <textarea 
                        className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.textarea}`}
                        name={form.id}
                        placeholder={form.placeholder}
                        required={form.state === 'required'}
                        disabled={form.state === 'disabled'}
                      />
                    ) : (
                      <input 
                        className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.text}`}
                        type={form.type}
                        id={`write_${form.id}`}
                        name={form.id}
                        placeholder={form.placeholder}
                        defaultValue={form.id === 'author' ? session.user.name : ''}
                        required={form.state === 'required'}
                        disabled={form.state === 'disabled'}
                      />
                    )
                  }
                </div>
              ))
            }
            <div className={`${globalStyles.btnWrap} ${pageStyles.btnWrap}`}>
              <ButtonType01 type="submit">글 작성하기</ButtonType01>
              <ListLink>목록보기</ListLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
