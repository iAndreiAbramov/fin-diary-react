import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    components: {
      button: {
        fontColor: {
          primary: string;
          alter: string;
          bordered: string;
          disabled: string;
          active: string;
          alterHoverFocus: string;
        };
        bgColor: {
          primary: string;
          alter: string;
          primaryHoverFocus: string;
          active: string;
          disabled: string;
        };
      };
      input: {
        fontColor: {
          default: string;
          disabled: string;
          placeholder: string;
        };
        bgColor: {
          default: string;
          focusedActive: string;
          disabled: string;
        };
        borderColor: {
          default: string;
          focusedActive: string;
          disabled: string;
        };
      };
    };
    globals: {
      fontColor: string;
      bgColor: string;
    };
  }
}
