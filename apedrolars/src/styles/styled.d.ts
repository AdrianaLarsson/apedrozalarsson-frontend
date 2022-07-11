import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueSky: string;
      snow: string;
      sand: string;
      white: string;
      danger: string;
      dangerHover: string;
      lightGranite: string;
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      success: string;
      successHover: string;
      warning: string;
      warningHover: string;
      rosa: string;
      black: string;
    };
    deviceSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  }
}
