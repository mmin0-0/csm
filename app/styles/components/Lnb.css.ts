import { style, composeStyles, globalStyle } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const lnbWrap = style({
  position: 'relative',
  width: '24rem',
  minWidth: '24rem',
  height: '100vh',
  padding: '2rem 0',
});

export const logo = style({padding: '0 2rem'});

export const navWrap = style({marginTop: '6rem'});

const baseLink = () => ({
  position: 'relative',
  display: 'block',
  padding: '1rem 2rem',
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.medium,
  fontFamily: vars.fontFamily.titFont,
  color: vars.color.gray,
  textTransform: 'capitalize',
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  transition: 'color .25s',
  selectors: {
    '&:not(:first-child)': {marginTop: '.4rem'},
    '&:hover, &:active': {color: vars.color.mainColor},
    '&:hover::after, &:active::after': {opacity: 1},
    '&::after': {
      content: '',
      width: '.4rem',
      height: '100%',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 0,
      opacity: 0,
      transition: 'opacity .25s',
      background: vars.color.mainColor
    }
  }
});

export const link = style(baseLink());
export const activeLinkStyle = style({
  color: vars.color.mainColor,
  selectors: {
    '&::after':{opacity: 1}
  }
});
export const linkActive = composeStyles(link, activeLinkStyle);

export const icon = style({
  width: '3rem',
  height: '3rem',
  filter: 'invert(65%) sepia(10%) saturate(12%) hue-rotate(13deg) brightness(92%) contrast(94%)',
  selectors: {
    [`${link}:hover &`]:{filter: vars.color.mainFilter}
  }
});
globalStyle(`${linkActive} div`,{filter: vars.color.mainFilter});
globalStyle(`${icon} img`, {maxWidth: '100%'});

export const support = style({
  width: 'calc(100% - 4rem)',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '4rem',
});

export const supportInfo = style({
  marginTop: '1rem',
  textAlign: 'center'
});

globalStyle(`${supportInfo} *`, {
  lineHeight: '1.4',
  color: vars.color.gray,
  fontSize: vars.fontSize.small
});