import { ITheme } from '../type/ITheme';

export const baseTheme: ITheme = {
  colors: {
    primaryOrange: '#FF6633',
    primaryGreen: '#00CC2D',

    textFirst: '#686870',
    textSecond: '##86868B',
    textThird: '#9E9E9E',

    white: '#FFFFFF',
    black: '#1D1D1F',
    yellow: '#FFC700',
    red: '#F44837',
    green: '#55B20B',

    dividerFirst: '#D2D2D7',
    dividerSecond: '#EDEDED',
    dividerThird: '#F5F5F5',

    bgGray: '#F5F5F7',
    bgInput: '#F5F5F7',
    bgTransparentSecond: 'rgba(39, 39, 39, 0.1)',
    bgTransparentFirst: 'rgba(39, 39, 39, 0.05)',

    bgYellow: '#FEF7ED',
    bgOrange: '#FBDCD5',
    bgGreen: '#CCF5D5',

    hoverOrange: '#E65C2E',
    hoverGreen: '#00A324',

    menuHover: 'rgba(255, 102, 51, 0.15)',
  },

  media: {
    extraLarge: '(max-width: 1270px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  sizes: {
    header: { height: 80 },
    container: { width: 1570 },
    footer: { height: 376 },
    modal: { width: 590 },
  },

  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
