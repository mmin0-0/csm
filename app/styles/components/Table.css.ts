import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const tableWrap = style({
  width: '100%',
  overflowY: 'auto',
  padding: '.8rem 0',
  selectors: {
    '&::-webkit-scrollbar': {
      width: 4,
      height: 4
    },
    '&::-webkit-scrollbar-thumb': {
      background: vars.color.mainColor
    }
  }
});

// default table
export const defaultTable = style({
  textAlign: 'center'
});

globalStyle(`${defaultTable} > thead`, {
  borderTop: `1px solid ${vars.color.mainColor}`,
  background: vars.color.white
});

globalStyle(`${defaultTable} > tbody > tr`, {
  borderTop: `1px solid ${vars.color.gray02}`,
  cursor: 'pointer',
  background: vars.color.white,
  transition: 'background .25s'
});
globalStyle(`${defaultTable} > tbody > tr:first-child`, {
  borderTopColor: vars.color.mainColor
});

globalStyle(`${defaultTable} > tbody > tr:hover`, {
  background: '#B2DAFF'
});

export const tableItem = style({
  padding: '.8rem .6rem',
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium,
  lineHeight: '1.2',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

// board table
export const boardWrap = style({});

globalStyle(`${boardWrap} *`, {fontSize: vars.fontSize.small});

export const boardTable = style({});

globalStyle(`${boardTable} tbody tr`, {
  borderTop: `1px solid ${vars.color.gray}`
});

globalStyle(`${boardTable} tbody tr:last-child`, {
  borderBottom: `1px solid ${vars.color.gray}`
});

globalStyle(`${boardTable} tbody tr div`, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

globalStyle(`${boardTable} th div`, {
  padding: '1rem .8rem',
  fontWeight: vars.fontWeight.medium,
  background: '#B2DAFF',
});

globalStyle(`${boardTable} td div`, {
  padding: '1rem .8rem',
  background: vars.color.white
});

export const boardCont = style({
  padding: '2rem 1.4rem',
  minHeight: '10rem',
  maxHeight: '30rem',
  overflowY: 'auto',
  background: vars.color.white,
  borderBottom: `1px solid ${vars.color.gray}`
});

globalStyle(`${boardCont} p`, {lineHeight: '1.4'});