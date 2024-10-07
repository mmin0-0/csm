import { globalStyle, style, keyframes } from '@vanilla-extract/css';
import { vars } from './theme.css';

// common style
export const btnWrap = style({marginTop: '2rem'});
export const contBox = style({
  borderRadius: '2rem',
  padding: '2rem',
  background: vars.color.white,
  boxShadow: vars.color.mainShadow
});
export const activeBox = style({
  transition: 'all .25s',
  selectors: {
    '&:hover': {boxShadow: `rgba(${vars.color.blueRGB}, .25) 0px 8px 18px;`}
  }
});

// home style
export const homeGroup = style({});

export const homeItem = style({
  width: '100%',
  selectors: {
    '&:not(:first-child)': {marginTop: '2rem'}
  }
});
globalStyle(`${homeItem} > div section`, {position: 'relative'});
globalStyle(`${homeItem} > div section:not(:first-child)`, {marginTop: '2rem'});
export const firstItem = style({
  display: 'flex',
  gap: '2rem'
});
globalStyle(`${firstItem} > div:first-child`,{width: 'calc(70% - 1rem)'});
globalStyle(`${firstItem} > div:last-child`, {width: 'calc(30% - 1rem)'});
export const height100 = style({height: '100%'});
export const homeContTit = style({marginBottom: '2.4rem'});
globalStyle(`${homeContTit} strong`, {
  fontWeight: vars.fontWeight.semiBold,
  fontSize: vars.fontSize.xlarge
});
globalStyle(`${homeContTit} a`, {
  color: vars.color.mainColor,
  fontWeight: vars.fontWeight.medium,
  marginLeft: '2rem'
});
export const homeContInner = style({});
export const link = style({
  // height: 'calc(100% - 5rem)',
  // overflowY: 'auto',
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium,
  color: `${vars.color.gray} !important`
});
export const boardWrap = style({
  paddingTop: '1rem',
  borderTop: `1px solid ${vars.color.gray02}`
});
export const boardItem = style({
  padding: '.6rem .4rem',
  borderRadius: '.4rem',
  transition: 'all .25s',
  selectors: {
    '&:hover': {background: `rgba(${vars.color.blueRGB}, .25)`},
    '&:nth-child(n + 5)':{display: 'none'}
  }
});
globalStyle(`${boardItem} > a`, {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem'
});
globalStyle(`${boardItem} > a > p`, {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
});
globalStyle(`${boardItem} > a > p i`, {
  fontSize: vars.fontSize.small,
  marginRight: '1rem',
  color: vars.color.mainHover
});
globalStyle(`${boardItem} > a > span`, {
  whiteSpace: 'nowrap',
  fontSize: vars.fontSize.small,
  color: vars.color.gray
});
export const outsourcingSwiper = style({
  minWidth: '30rem'
});
export const thumbnail = style({
  maxHeight: '20rem',
  borderRadius: '2rem',
  overflow: 'hidden'
});
export const outsourcingInfo = style({marginTop: '2rem'});
globalStyle(`${outsourcingInfo} > p`, {
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium,
  marginTop: '1.2rem',
  lineHeight: '1.4',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
});
export const swiperControls = style({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  gap: '1rem'
});
export const swiperBtn = style({
  position: 'static',
  marginTop: 0,
  padding: 0,
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  border: 0,
  selectors: {
    '&:disabled': {
      opacity: '.65',
      pointerEvents: 'none'
    },
    '&:hover': {background: vars.color.mainColor},
    '&:after': {display: 'none'}
  }
});
export const swiperBtnIcon = style({
  filter: 'invert(68%) sepia(3%) saturate(12%) hue-rotate(51deg) brightness(91%) contrast(85%)',
  selectors: {
    [`${swiperBtn}:hover &`]:{filter: 'none'}
  }
});
export const tag = style({
  borderRadius: '.6rem',
  padding: '.4rem .6rem',
  fontSize: vars.fontSize.small,
  textTransform: 'uppercase',
  color: vars.color.mainColor,
  background: `rgba(${vars.color.blueRGB}, 0.25)`,
});
globalStyle(`${tag} i`, {marginRight: '1rem'});
export const tagDesign = style({
  color: vars.color.orange,
  background: `rgba(${vars.color.orangeRGB}, 0.25)`
});
export const tagPlanning = style({
  color: vars.color.yellow,
  background: `rgba(${vars.color.yellowRGB}, 0.25)`
});
export const tagFrontend = style({
  color: vars.color.green,
  background: `rgba(${vars.color.greenRGB}, 0.25)`
});
export const infoWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.8rem',
  marginTop: '1rem',
  paddingTop: '1rem',
  borderTop: `1px solid ${vars.color.gray02}`
});
export const profile = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  overflow: 'hidden',
  background: vars.color.gray02
});
globalStyle(`${profile} > img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});
export const userInfo = style({});
globalStyle(`${userInfo} > strong`, {
  fontWeight: vars.fontWeight.medium,
  textTransform: 'uppercase'
});
globalStyle(`${userInfo} > p`, {
  marginTop: '.6rem',
  color: vars.color.gray,
  fontSize: vars.fontSize.small,
  textTransform: 'capitalize'
});
export const lecture = style({
  display: 'flex',
  gap: '2rem',
  marginTop: '2rem'
});
globalStyle(`${lecture} > div`,{
  flex: 1,
  padding: '1rem',
  borderRadius: '1rem',
  background: vars.color.white,
});
globalStyle(`${lecture} > div > a`,{
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'

});
globalStyle(`${lecture} > div > a *`,{fontSize: '1.4rem'});
globalStyle(`${lecture} > div > a strong`,{fontWeight: vars.fontWeight.medium});
globalStyle(`${lecture} > div > a span`,{
  color: vars.color.gray,
  display: 'block',
  marginTop: '.6rem'
});
globalStyle(`${lecture} > div i`, {fontSize: vars.fontSize.xlarge});
globalStyle(`${lecture} > div:nth-child(2) i`, {
  color: vars.color.orange,
  background: `rgba(${vars.color.orangeRGB}, .25)`,
});
globalStyle(`${lecture} > div:last-child  i`, {
  color: vars.color.green,
  background: `rgba(${vars.color.greenRGB}, .25)`,
});
export const lectureIcon = style({
  width: '5rem',
  minWidth: '5rem',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.4rem',
  color: vars.color.mainColor,
  background: `rgba(${vars.color.blueRGB}, .25)`
});
globalStyle(`${lectureIcon} svg`,{fontSize: vars.fontSize.large});
export const contact = style({});
globalStyle(`${contact} > div`, {
  padding: '1.4rem 0',
  borderBottom: `1px solid ${vars.color.gray02}`,
  position: 'relative'
});
globalStyle(`${contact} > div:first-child`, {paddingTop: 0});
globalStyle(`${contact} > div > a`, {
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem'
});
globalStyle(`${contact} > div strong`, {
  fontSize: vars.fontSize.small,
  textTransform: 'uppercase',
  fontWeight: vars.fontWeight.medium,
  display: 'block',
  margin: '1rem 0 .6rem'
});
globalStyle(`${contact} > div span`, {
  fontSize: vars.fontSize.small,
  textTransform: 'uppercase',
  color: vars.color.gray
});
export const contactBtn = style({
  width: '3rem',
  height: '3rem',
  color: vars.color.gray,
  fontSize: vars.fontSize.large,
  border: 0,
  padding: 0,
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)'
});
export const contactProfile = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  overflow: 'hidden'
});
globalStyle(`${contactProfile} > img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});
export const eventWrap = style({
  width: '100%',
  height: '100%',
  minHeight: '20rem',
  borderRadius: '2rem',
  background: vars.color.mainColor
});
export const eventSwiper = style({});
export const eventImg = style({height: '30rem'});
globalStyle(`${eventImg} img`, {
  height: '100%',
  width: '100%',
  objectFit: 'cover'
});
globalStyle(`${eventSwiper} .swiper-pagination`,{
  height: '2rem',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  padding: '0 1rem',
  textAlign: 'right'
});
globalStyle(`${eventSwiper} .swiper-pagination-bullet`,{
  width: '1rem',
  height: '1rem',
  background: vars.color.gray
});
globalStyle(`${eventSwiper} .swiper-pagination-bullet-active`,{background: vars.color.mainHover});
// detail page
export const commentWrap = style({marginTop: '4rem'});
export const commentWrapTit = style({fontWeight: vars.fontWeight.bold});
globalStyle(`${commentWrapTit} span`,{
  fontWeight: vars.fontWeight.bold,
  color: vars.color.mainColor
});
export const addComment = style({
  marginTop: '1.4rem',
  display: 'flex',
  gap: '1rem'
});
export const commentArea = style({height: '6rem !important'});
export const commentEmpty = style({marginTop: '2rem'});
export const commentItem = style({
  padding: '1.6rem 0',
  borderBottom: `1px solid ${vars.color.gray}`
});
export const commentInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const commentTit = style({gap: '.8rem'});
globalStyle(`${commentTit} strong`, {
  fontWeight: vars.fontWeight.bold
});
export const commentControls = style({});
globalStyle(`${commentControls} button`, {
  border: 0,
  borderRadius: 0,
  padding: '0 .6rem',
  background: 'inherit'
});
globalStyle(`${commentControls} button:hover`, {background: 'inherit'});
globalStyle(`${commentControls} button:not(:last-child)`, {borderRight: `1px solid ${vars.color.gray}`});
globalStyle(`${commentControls} button:hover`, {color: vars.color.mainColor});
export const commentCont = style({marginTop: '2rem'});
globalStyle(`${commentCont} p`, {lineHeight: '1.2'});
// write page

// register page
export const notice = style({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.8rem'
});


globalStyle(`${notice} > *`, {
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium
});

globalStyle(`${notice} > a`, {
  color: vars.color.mainColor,
  fontWeight: vars.fontWeight.bold
});

// empty page
export const emptyWrap = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
});
export const emptyInfo = style({
  marginTop: '2rem'
});
globalStyle(`${emptyInfo} h4`,{
  fontSize: vars.fontSize.xlarge,
  fontWeight: vars.fontWeight.medium
});
globalStyle(`${emptyInfo} p`,{
  margin: '2rem 0',
  lineHeight: '1.2'
});
globalStyle(`${emptyInfo} .btn-wrap`,{
  flexDirection: 'column'
});
globalStyle(`${emptyInfo} .btn-wrap button`,{
  width: '100%',
  borderRadius: '2rem'
});

// loading page
const loadingTransform = keyframes({
  '0%': {transform: 'translate(0,0)'},
  '50%': {transform: 'translate(0, 15px)'},
  '100%': {transform: 'translate(0, 0)'}
});
export const loading = style({});
globalStyle(`${loading} strong`,{
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.medium
});
export const loadWrap = style({
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem'
});
export const loadingLine = style({
  width: '1.2rem',
  height: '1.2rem',
  borderRadius: '50%',
  background: vars.color.mainHover,
  animation: `${loadingTransform} .6s linear infinite`,
  selectors: {
    '&:first-child': {animationDelay: '.1s'},
    '&:nth-child(2)': {animationDelay: '.2s'},
    '&:last-child': {animationDelay: '.3s'},
  }
});