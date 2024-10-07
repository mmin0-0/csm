import { globalStyle, style } from "@vanilla-extract/css";
import { vars, media } from './theme.css';

globalStyle('*',{
  boxSizing: 'border-box'
});

globalStyle('html',{
  fontSize: '10px !important'
});

globalStyle('body', {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.normal,
  fontSize: `${vars.fontSize.regular} !important`,
  lineHeight: 1,
  // wordBreak: 'keep-all',
  letterSpacing: '-0.02em',
  color: vars.color.black
});

globalStyle('body *', {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.normal,
});

globalStyle('table', {
  width: '100%',
  tableLayout: 'fixed'
});

globalStyle('button', {
  padding: '.6rem .8rem',
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.black,
  wordBreak: 'keep-all',
  border: `1px solid ${vars.color.gray}`,
  borderRadius: '.6rem',
  background: vars.color.white,
  transition: 'all .25s',
});

export const btnWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.6rem'
});

globalStyle(`${btnWrap} > button`, {
  minWidth: '10rem'
});
export const imgWrap = style({});
globalStyle(`${imgWrap} img`, {maxWidth: '100%'});

export const hide = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  border: 0,
  margin: '-1px',
  overflow: 'hidden',
  clipPath: 'polygon(0 0, 0 0, 0 0)'
});

export const centerFlex = style({
  display: 'flex',
  alignItems: 'center',
});

export const betweenFlex = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between'
});

export const wrapper = style({
  display: 'flex',
  width: '100vw',
  // minWidth: '1400px',
});

export const wrap = style({
  width: 'calc(100% - 24rem)',
  minHeight: '100vh',
  background: vars.color.gray03,
  position: 'relative',
  '@media': {
    [media.lg]: {
      overflowX: 'auto',
      minWidth: '1200px'
    }
  }
});

// page 공통요소(title, container)
export const container = style({
  padding: '2rem',
});

export const contWrap = style({});

export const contTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3.4rem'
});

export const secTit = style({
  selectors: {
    [`${contTitle} > &`]:{
      fontWeight: vars.fontWeight.bold,
      fontSize: vars.fontSize.xlarge
    },
  }
});

// form 공통요소(input)
export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.6rem',
  selectors: {
    '&:not(:first-child)': {marginTop: '2rem'}
  }
});

export const formInner = style({position: 'relative'});

export const emphasis = style({
  color: 'red',
  fontWeight: vars.fontWeight.medium
});

export const label = style({
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.small
});

export const ess = style({
  selectors: {
    '&::before': {
      content: '*',
      color: vars.color.red,
      marginRight: '.4rem'
    }
  }
});

export const inputStyles = style({
  width: '100%',
  padding: '.6rem .8rem',
  fontSize: vars.fontSize.small,
  border: `1px solid ${vars.color.gray}`,
  selectors: {
    '&:focus':{borderColor: vars.color.mainColor}
  }
});

export const inputTypeStyles = {
  text: style({
    selectors: {
      '&[type="text"]': {maxHeight: '3rem'},
      '&[type="file"]::file-selector-button': {
        width: '14rem',
        padding: '.4rem',
        cursor: 'pointer',
        background: vars.color.white,
        border: `1px solid ${vars.color.mainColor}`,
        borderRadius: '.4rem',
        transition: 'all .25s'
      },
      '&[type="file"]::file-selector-button:hover':{
        background: vars.color.mainColor,
        color: vars.color.white
      }
    }
  }),
  password: style({
    selectors: {
      '&[type="password"]': {padding: '.6rem 2.4rem .6rem .8rem'}
    }
  }),
  textarea: style({
    height: '20rem',
    resize: 'none',
    outline: 'none',
    whiteSpace: 'pre-wrap'
  })
};

export const eyeBtn = style({
  width: '2rem',
  height: '2rem',
  color: vars.color.gray,
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  right: '.8rem',
  transform: 'translateY(-50%)'
});

export const tabMenu = style({});
globalStyle(`${tabMenu} > a`, {
  paddingBottom: '1.6rem',
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray
});
globalStyle(`${tabMenu} > a.on`, {
  color: vars.color.black,
  borderBottom: `3px solid ${vars.color.mainColor}`
});
globalStyle(`${tabMenu} > a:not(:first-child)`, {marginLeft: '2rem'});