import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    background: {
      main: string;
      github: string;
      github_hover: string;
      google: string;
      google_hover: string;
      success: string;
      success2: string;
    };

    border: {
      github: string;
      google: string;
      input: string;
      input_hover: string;
      checkbox: string;
      break: string;
    };

    color: {
      primary: string;
      tertiary: string;
      secondary: string;
      success: string;
      error: string;
      github: string;
    };
  }
}
