import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    background: {
      main: string;
      facebook: string;
      google: string;
      success: string;
      success2: string;
    };

    colors: {
      primary: string;
      tertiary: string;
      secondary: string;
    };
  }
}
