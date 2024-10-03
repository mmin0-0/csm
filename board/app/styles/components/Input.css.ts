import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const searchContainer = style({
  position: 'relative',
  borderRadius: 10,
  overflow: 'hidden',
  width: '3.4rem',
  height: '3.4rem',
  border: `1px solid ${vars.color.mainColor}`,
  cursor: 'pointer',
  transition: 'all .5s ease-in-out',
  transformOrigin: 'right',
  selectors: {
    '&:focus-within': {width: '23rem'},
    '&::before':{
      content: '',
      width: '3.4rem',
      height: '100%',
      position:  'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      background: `${vars.color.mainColor} url(/images/icon/search_icon.svg) center center/ contain`,
    }
  }
});

export const searchInput = style({
  position: 'absolute',
  right: 0,
  top: 0,
  width: 'calc(100% - 3rem)',
  height: '100%',
  padding: '1rem',
  border: 0,
  outline: 'none',
  background: vars.color.transparent,
  // transition: 'all .5s ease-in-out',
  // transformOrigin: 'right',
  selectors: {
    '&::placeholder': {color: vars.color.gray},
  }
});