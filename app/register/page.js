import * as globalStyles from '../styles/global.css';
import * as pageStyles from '../styles/Pages.css';
import Link from 'next/link';
import Form from './Form.js';

export default function Register() {
  return (
    <>
      <div className={globalStyles.contTitle}>
        <h4 className={globalStyles.secTit}>회원가입</h4>
      </div>
      <div className={globalStyles.contWrap}>
        <div className={pageStyles.contBox}>
          <Form />
          <div className={pageStyles.notice}>
            <p>이미 계정이 있으신가요?</p>
            <Link href="/api/auth/signin">로그인하기</Link>
          </div>
        </div>
      </div>
    </>
  )
}