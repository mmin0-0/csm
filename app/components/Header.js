import { btnWrap } from '../styles/global.css';
import { SearchBar } from './Input';
import { LoginBtn, LogoutBtn, RegisterBtn } from './Button';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]'; 
import * as headerStyles from '../styles/components/Header.css';

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.hdInner}>
        {
          session ? (
            <>
            <h4 className={headerStyles.userName}>
              Hello <strong>{session.user.name}</strong>, welcome back!</h4>
            </>
          ) : (
            <>
              <h4 className={headerStyles.userName}>
              Hello, welcome <strong>CSㆍM</strong></h4>
            </>
          )
        }
        <div className={headerStyles.hdInfo}>
          {/* <div className="search-bar">
            <form action="" method="POST">
              <SearchBar />
            </form>
          </div> */}
          <div className={`${btnWrap} ${headerStyles.btnWrap}`}>
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