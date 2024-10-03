'use client'
import { usePathname } from 'next/navigation';
import * as globalStyles from "../styles/global.css";
import * as lnbStyles from '../styles/components/Lnb.css';
import Link from 'next/link';

export default function Lnb() {
  const path = usePathname();
  const menuWrap = [
    {
      title: 'home',
      link: '/'
    },
    {
      title: 'board',
      link: '/board'
    },
    {
      title: 'write',
      link: '/write'
    }
  ];

  return (
    <div className={lnbStyles.lnbWrap}>
      <div className={lnbStyles.logo}>
        <Link href="/"><img src="/images/common/logo.png" alt="CMS" /></Link>
      </div>
      <nav className={lnbStyles.navWrap}>
        {
          menuWrap.map((item, idx) => {
            const isActive =
              (item.link === '/board' && (path === '/board' || path.startsWith('/edit') || path.startsWith('/detail'))) ||
              path === item.link;

            return (
              <Link
                key={idx}
                href={item.link}
                className={isActive ? lnbStyles.linkActive : lnbStyles.link}
              >
                <div className={lnbStyles.icon}>
                  <img src={`/images/icon/${item.title}_icon.svg`} alt="icon" />
                </div>
                {item.title}
              </Link>
            );
          })
        }
      </nav>
      <div className={lnbStyles.support}>
        <div className={globalStyles.imgWrap}>
          <img src="/images/common/support_img.png" alt="고객센터" />
        </div>
        <div className={lnbStyles.supportInfo}>
          <p>Tel. <a href="tel: 000-000-0000">000-000-0000</a></p>
          <p>Email. <a href="mailto: mmin0_0@naver.com">mmin0_0@naver.com</a></p>
        </div>
      </div>
    </div>
  )
}