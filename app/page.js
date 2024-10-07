import { connectDB } from '@/util/database';
import * as globalStyles from "./styles/global.css";
import * as pageStyles from './styles/Pages.css';
import Link from 'next/link';
import { OutsourcingSwiper, EventSwiper } from './components/Swiper.js';
import { outsourcingData, EventData, learning, contactMembers } from './data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRulerCombined, faPen, faEllipsisVertical, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export default async function Home({ searchParams }) {
  const db = (await connectDB).db('board');
  const result = await db.collection('post').find().toArray();

  const activeTab = searchParams.tab || 'notice';
  const notices = result.filter(item => item.postType === 'notice');
  const boardPosts = result.filter(item => item.postType === 'general');
  const tabs = [
    { label: '공지사항', value: 'notice' },
    { label: '게시판', value: 'board' }
  ];

  const getIconByField = (field) => {
    switch (field) {
      case 'design':
        return faRulerCombined;
      case 'planning':
        return faPen;
      default:
        return faBook;
    }
  };

  return (
    <>
      <div className={pageStyles.homeGroup}>
        <div className={`${pageStyles.homeItem} ${pageStyles.firstItem}`}>
          <div>
            <section>
              <div className={`${globalStyles.betweenFlex} ${pageStyles.homeContTit}`}>
                <div>
                  <strong>CMS Board</strong>
                  <Link href="/board">View All</Link>
                </div>
                <Link href="/write" className={pageStyles.link}>Write ▶</Link>
              </div>
              <div className={pageStyles.homeContInner}>
                <div className={pageStyles.contBox}>
                  <div className={globalStyles.tabMenu}>
                    {
                      tabs.map((tab) => (
                        <Link
                          key={tab.value}
                          href={`?tab=${tab.value}`}
                          className={activeTab === tab.value ? 'on' : ''}
                        >{tab.label}</Link>
                      ))}
                  </div>
                  <ul className={pageStyles.boardWrap}>
                    {
                      (activeTab === 'notice' ? notices : boardPosts).map((item, idx) => (
                        <li key={item} className={pageStyles.boardItem}>
                          <Link href={`/detail/${item._id}`}>
                            <p>
                              {
                                activeTab === 'notice' ? (
                                  <i><FontAwesomeIcon icon={faBullhorn} /></i>
                                ):(<></>)
                              }
                              {item.title}
                            </p>
                            <span>{item.createAt.split(' ')[0]}</span>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div className={pageStyles.homeContTit}>
                <strong>Outsourcing</strong>
                <Link href="#none">View All</Link>
              </div>
              <div className={pageStyles.homeContInner}>
                <OutsourcingSwiper slides={outsourcingData} />
                <div className={pageStyles.lecture}>
                  {
                    learning.map((item) =>
                      <div key={item.field} className={pageStyles.contBox}>
                        <Link href="#none">
                          <i className={pageStyles.lectureIcon}>
                            <FontAwesomeIcon icon={getIconByField(item.field)} />
                          </i>
                          <div className="info">
                            <strong>{item.title}</strong>
                            <span>{item.time}</span>
                          </div>
                        </Link>
                      </div>
                    )
                  }
                </div>
              </div>
            </section>
          </div>
          <div>
            <section>
              <div className={`${globalStyles.betweenFlex} ${pageStyles.homeContTit}`}>
                <div>
                  <strong>Contact</strong>
                </div>
                <Link href="#none" className={pageStyles.link}>See all ▶</Link>
              </div>
              <div className={pageStyles.homeContInner}>
                <div className={`${pageStyles.contact} ${pageStyles.contBox}`}>
                  {
                    contactMembers.map((item) =>
                      <div>
                        <Link href="#none">
                          <div className={pageStyles.contactProfile}>
                            <img src={`/images/user_profile/${item.name}_profile.png`} alt="profile" />
                          </div>
                          <div>
                            <strong>{item.name}</strong>
                            <span>{item.field}</span>
                          </div>
                          <button className={pageStyles.contactBtn}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                        </Link>
                      </div>
                    )
                  }
                </div>
              </div>
            </section>
            <section>
              <div className={`${globalStyles.betweenFlex} ${pageStyles.homeContTit}`}>
                <div>
                  <strong>Event</strong>
                </div>
                <Link href="#none" className={pageStyles.link}>See all ▶</Link>
              </div>
              <div className={pageStyles.homeContInner}>
                <EventSwiper slides={EventData} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
