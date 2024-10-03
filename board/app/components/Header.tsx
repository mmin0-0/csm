import Link from 'next/link';
import { btnWrap } from '../styles/global.css';
import { SearchBar } from './Input';
import * as hdStyles from '../styles/components/Header.css';
import { LoginBtn, LogoutBtn, RegisterBtn } from './Button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { signIn, signOut } from 'next-auth/react';
// import userIcon from '@/public/images/icon/user_icon.png';

export default async function Header() {
  const session = await getServerSession(authOptions);
  // console.log(session.user.name)
  return (
    <header className={hdStyles.header}>
      <div className={hdStyles.hdInner}>
        {
          session ? (
            <>
            <h4 className={hdStyles.userName}>
              Hello <strong>{session.user.name}</strong>, welcome back!</h4>
            </>
          ) : (
            <>
              <h4 className={hdStyles.userName}>
              Hello, welcome <strong>CSㆍM</strong></h4>
            </>
          )
        }
        <div className={hdStyles.hdInfo}>
          {/* <div className="search-bar">
            <form action="" method="POST">
              <SearchBar />
            </form>
          </div> */}
          <div className={`${btnWrap} ${hdStyles.btnWrap}`}>
            {
              session ? (
                <>
                  <LogoutBtn />
                </>
              ) : (
                <>
                  <LoginBtn />
                  <RegisterBtn />
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}