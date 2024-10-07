'use client'
import * as tableStyles from '../styles/components/Table.css';
import { emphasis } from '../styles/global.css';
import { ObjectId } from 'mongodb';
import { useRouter } from 'next/navigation';

export const BoardTable = ({ columns, data }) => {
  const router = useRouter();
  const sortedData = data.sort((a, b) => {
    if (a.postType === 'notice' && b.postType !== 'notice'){
      return -1;
    }
    if (a.postType !== 'notice' && b.postType === 'notice'){
      return 1;
    }
    return 0;
  });

  return (
    <div className={tableStyles.tableWrap}>
      <table className={tableStyles.defaultTable}>
        <caption>board table</caption>
        <colgroup>
          {columns.map((col, idx) => {
            const width = col === '내용' ? '260px' : '120px';
            return <col width={width} key={idx} />;
          })}
        </colgroup>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>
                <div className={tableStyles.tableItem}>{col}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            sortedData.map((item, idx) => {
              return (
                <tr key={idx} onClick={() => { router.push(`/detail/${item._id.toString()}`) }}>
                  <td>
                    <div className={tableStyles.tableItem}>
                      {
                        item.postType === 'general' ? (
                          <>{idx + 1}</>
                        ) : (
                          <><p className={emphasis}>공지</p></>
                        )
                      }
                    </div>
                  </td>
                  <td><div className={tableStyles.tableItem}>{item.title}</div></td>
                  <td><div className={tableStyles.tableItem}>{item.content}</div></td>
                  <td><div className={tableStyles.tableItem}>{item.name}</div></td>
                  <td><div className={tableStyles.tableItem}>{item.createAt.split(' ')[0]}</div></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
