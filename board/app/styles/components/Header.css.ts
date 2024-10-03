import { globalStyle, style } from '@vanilla-extract/css';
import { vars, media } from '../theme.css';

export const header = style({
  width: '100%',
  height: '6rem',
  padding: '0 2rem',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  background: vars.color.gray03,
  // '@media': {
  //   [media.sm]:{
  //     background: 'black'
  //   }
  // }
});

export const hdInner = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative'
});

export const hdInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.6rem'
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.6rem'
});

export const userProfile = style({
  width: '4rem',
  height: '4rem',
  overflow: 'hidden',
  borderRadius: '50%',
  background: vars.color.white
});

export const userName = style({
  color: vars.color.mainColor
});

globalStyle(`${userName} strong`, {fontWeight: vars.fontWeight.semiBold});

export const btnWrap = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)'
});