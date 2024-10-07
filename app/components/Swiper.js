'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import * as globalStyles from "../styles/global.css";
import * as pageStyles from '../styles/Pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faCode, faPenNib, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

export const OutsourcingSwiper = ({ slides }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(()=>{
    if(prevRef.current && nextRef.current){
      setTimeout(()=>{
        if(prevRef.current && nextRef.current){
          prevRef.current.classList.add('swier-button-prev');
          nextRef.current.classList.add('swier-button-next');
        }
      }, 0);
    }
  }, []);

  const getIconByField = (field) => {
    switch (field) {
      case 'design':
        return faPenNib;
      case 'planning':
        return faBookOpen;
      case 'backend':
        return faCodePullRequest;
      default:
        return faCode;
    }
  };
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2.5}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper)=>{
          if(swiper.params.navigation){
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {
          slides.map((slide, idx) => (
            <SwiperSlide key={slide.idx} className={`${pageStyles.contBox} ${pageStyles.outsourcingSwiper}`}>
              <Link href="#none">
                <div className={`${globalStyles.imgWrap} ${pageStyles.thumbnail}`}>
                  <img src={`/images/home/${slide.field}_img.jpg`} alt="이미지" />
                </div>
                <div className={pageStyles.outsourcingInfo}>
                  <strong className={
                    `${pageStyles.tag} 
                    ${slide.field === 'design' ? pageStyles.tagDesign :
                      slide.field === 'planning' ? pageStyles.tagPlanning : 
                      slide.field === 'frontend' ? pageStyles.tagFrontend : 
                      pageStyles.tag}`}>
                    <i className="icon">
                      <FontAwesomeIcon icon={getIconByField(slide.field)} />
                    </i>
                    {slide.job}
                  </strong>
                  <p>{slide.content}</p>
                  <div className={pageStyles.infoWrap}>
                    <div className={pageStyles.profile}>
                      <img src={`/images/user_profile/${slide.field}_profile.png`} alt="profile" />
                    </div>
                    <div className={pageStyles.userInfo}>
                      <strong>{slide.name}</strong>
                      <p>{slide.position}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={pageStyles.swiperControls}>
        <button ref={prevRef} className={pageStyles.swiperBtn}><img src="/images/icon/arrow_prev_icon.svg" alt="prev" className={pageStyles.swiperBtnIcon}/></button>
        <button ref={nextRef} className={pageStyles.swiperBtn}><img src="/images/icon/arrow_next_icon.svg" alt="next" className={pageStyles.swiperBtnIcon} /></button>
      </div>
    </div>
  );
};

export const EventSwiper = ({slides}) => {
  return(
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        className={pageStyles.eventSwiper}
      >
        {
          slides.map((slide, idx) => (
            <SwiperSlide key={slide.title}>
              <div className={`${globalStyles.imgWrap} ${pageStyles.eventImg}`}>
                <img src={`/images/home/event_img0${idx + 1}.png`} alt="event" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};