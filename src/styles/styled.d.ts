import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    components: {
      button: {
        primary: {
          fontColor: {
            default: string;
            disabled: string;
            active: string;
            hoverFocus: string;
          };
          bgColor: {
            default: string;
            hoverFocus: string;
            active: string;
            disabled: string;
          };
        };
        alter: {
          fontColor: {
            default: string;
            disabled: string;
            active: string;
            hoverFocus: string;
          };
          bgColor: {
            default: string;
            hoverFocus: string;
            active: string;
            disabled: string;
          };
        };
        outlined: {
          fontColor: {
            default: string;
            disabled: string;
            active: string;
            hoverFocus: string;
          };
          borderColor: {
            default: string;
            hoverFocus: string;
            active: string;
            disabled: string;
          };
        };
        borderless: {
          fontColor: {
            default: string;
            disabled: string;
            active: string;
            hoverFocus: string;
          };
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
          invalid: string;
        };
      };
      mainMenuItem: {
        fontColor: {
          default: string;
          active: string;
          hoverFocus: string;
        };
        bgColor: {
          default: string;
          hoverFocus: string;
          active: string;
        };
      };
    };
    globals: {
      bgColor: {
        default: string;
        header: string;
        footer: string;
      };
      fontColor: {
        default: string;
        inverse: string;
      };
      fgColor: {
        firstLevel: string;
        secondLevel: string;
      };
      errorText: string;
    };
  }
}
