import { Noto_Sans_KR, Roboto } from 'next/font/google';
import './styles/reset.css';
import './styles/theme.css';
import * as globalStyles from "./styles/global.css";
import Lnb from './components/Lnb';
import Header from './components/Header';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-noto-sans-kr'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
});

export const metadata = {
  title: "CSM(코사모)",
  description: "코딩을 사랑하는 모임",
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }){
  return (
    <html lang="kr">
      <body className={notoSansKR.className}>
        <div className={globalStyles.wrapper}>
          <Lnb />
          <div className={globalStyles.wrap}>
            <Header />
            <div className={globalStyles.container}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
