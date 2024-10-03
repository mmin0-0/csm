import * as globalStyles from './styles/global.css';
import * as pageStyles from './styles/Pages.css';
import { ButtonType01 } from './components/Button';
import { type } from './styles/components/Button.css'

export default function notFound(){
  return(
    <>
      <div className={globalStyles.contWrap}>
        <div className={pageStyles.emptyWrap}>
          <div className={globalStyles.imgWrap}>
            <img src="/images/icon/error_icon.svg" alt="error" />
          </div>
          <div className={pageStyles.emptyInfo}>
            <h4>페이지를 찾을 수 없습니다.</h4>
            <p>
            요청하신 주소가 잘못되었거나<br />
            변경 또는 삭제되었을 수 있습니다.<br />
            주소를 다시 한번 확인 부탁드립니다.
            </p>
            <div className={`${globalStyles.btnWrap} btn-wrap`}>
              <ButtonType01>메인 페이지</ButtonType01>
              <ButtonType01 className={type.type01}>이전 페이지</ButtonType01>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}