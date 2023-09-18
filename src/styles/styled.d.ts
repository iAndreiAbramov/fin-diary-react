import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    components: {
      button: {
        fontColor: string;
        bgColor: string;
      }
    };
    globals: {
      fontColor: string;
      bgColor: string;
    }
  }
}
