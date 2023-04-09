export interface ITheme {
  colors: {
    primaryOrange: string;
    primaryGreen: string;

    textFirst: string;
    textSecond: string;
    textThird: string;

    white: string;
    black: string;
    yellow: string;
    red: string;
    green: string;

    dividerFirst: string;
    dividerSecond: string;
    dividerThird: string;

    bgGray: string;
    bgInput: string;
    bgTransparentSecond: string;
    bgTransparentFirst: string;

    bgYellow: string;
    bgOrange: string;
    bgGreen: string;

    hoverOrange: string;
    hoverGreen: string;
  };
  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };

  sizes: {
    header: { height: number };
    container: { width: number };
    footer: { height: number };
    modal: { width: number };
  };

  durations: {
    ms300: number;
  };

  order: {
    header: number;
    modal: number;
  };
}
