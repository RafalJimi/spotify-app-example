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
      landingPageButton: string;
      socialMedia: string;
      playButton: string;
      optionsMenu: string;
    };

    border: {
      github: string;
      google: string;
      input: string;
      input_hover: string;
      checkbox: string;
      break: string;
      landingPageButton: string;
    };

    color: {
      primary: string;
      tertiary: string;
      secondary: string;
      success: string;
      error: string;
      github: string;
      landingPageButton: string;
      lightGreen: string;
      lightGray: string;
    };

    webPlayer: {
      primaryBackground: string;
      secondaryBackground: string;
      border: string;
    };
  }
}
