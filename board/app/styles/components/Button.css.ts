import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const defaultBtn = style({
  // minWidth: '10rem',
  border: `1px solid ${vars.color.gray}`,
  ':hover': {
    background: vars.color.mainColor,
    color: vars.color.white,
    borderColor: vars.color.mainColor
  }
});

export const type = {
  type01: style({
    color: vars.color.white,
    background: vars.color.mainColor,
    borderColor: vars.color.mainColor,
    selectors: {
      '&:hover':{
        background: vars.color.mainHover,
        borderColor: vars.color.mainHover
      }
    }
  })
}
