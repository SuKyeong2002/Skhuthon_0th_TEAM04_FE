import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      text: string;
      background: string;
      main: string;
      sub: string;
      point: string;
    };

    fontSize: {
      large: string;
      medium: string;
      small: string;
      xSmall: string;
    };
  }
}
