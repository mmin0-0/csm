import * as pageStyles from './styles/Pages.css';

export default function Loading(){
  return(
    <>
      <div className={pageStyles.loading}>
        <strong>Loading ...</strong>
        <div className={pageStyles.loadWrap}>
          <div className={pageStyles.loadingLine}></div>
          <div className={pageStyles.loadingLine}></div>
          <div className={pageStyles.loadingLine}></div>
        </div>
      </div>
    </>
  )
}