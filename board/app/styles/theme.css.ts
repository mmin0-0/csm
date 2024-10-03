import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    black: 'black',
    white: 'white',
    gray: 'gray',
    gray02: 'gray02',
    gray03: 'gray03',
    red: 'red',
    orange: 'orange',
    green: 'green',
    yellow: 'yellow',
    transparent: 'transparent', 
    mainColor: 'mainColor',
    mainHover: 'mainHover',
    mainFilter: 'mainFilter',
    mainShadow: 'mainShadow',
    orangeRGB: 'orangeRGB',
    greenRGB: 'greenRGB',
    yellowRGB: 'yellowRGB',
    blueRGB: 'blueRGB'   
  },
  fontFamily: {
    body: 'bodyFont',
    titFont: 'titFont'
  },
  fontSize: {
    small: 'small',
    regular: 'regular',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge'
  },
  fontWeight: {
    normal: 'normal',
    medium: 'medium',
    semiBold: 'semiBod',
    bold: 'bold'
  }
});

createGlobalTheme(':root', vars, {
  color:{
    black: '#000000',
    white: '#ffffff',
    gray: '#999999',
    gray02: '#f2f2f2',
    gray03: '#f4f8fd',
    orange: '#ff993a',
    red: '#FE4545',
    green: '#8ac53e',
    yellow: '#ffd143',
    transparent: 'transparent', 
    mainColor: '#369fff',
    mainHover: '#006ed3',
    mainFilter: 'invert(52%) sepia(46%) saturate(1966%) hue-rotate(186deg) brightness(100%) contrast(103%)',
    mainShadow: 'rgba(200,200,200, 0.4) 0px 3px 20px 0px',
    orangeRGB: '255,153,58',
    greenRGB: '138,197,62',
    yellowRGB: '255,209,67',
    blueRGB: '54,159,255'   
  },
  fontFamily: {
    body: 'var(--font-noto-sans-kr)',
    titFont: 'var(--font-roboto)'
  },
  fontSize: {
    small: '1.4rem',
    regular: '1.6rem',
    medium: '1.8rem',
    large: '2rem',
    xlarge: '2.4rem'
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700'
  }
});
  
export const media = {
  xs: 'screen and (max-width: 420px)',
  sm: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1200px)'
}