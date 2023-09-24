import { DefaultTheme } from 'styled-components';

const MainColor = {
  Dark: '#181818',
  SemiDark: '#595959',
  Medium: '#919090',
  SemiLight: '#cccccc',
  Light: '#ffffff',
};

const AlterColor = {
  Dark: '#152507',
  SemiDark: '#406220',
  Medium: '#6a9443',
  SemiLight: '#93C06B',
  Light: '#c1ea9d',
};

const AccentColor = {
  Dark: '#04292d',
  SemiDark: '#19565d',
  Medium: '#4b8c93',
  SemiLight: '#7bbec5',
  Light: '#c3ecf1',
};

const GlobalColor = {
  Error: '#8a1f1f',
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  components: {
    button: {
      primary: {
        fontColor: {
          default: MainColor.Dark,
          disabled: MainColor.SemiLight,
          active: MainColor.SemiDark,
          hoverFocus: MainColor.SemiDark,
        },
        bgColor: {
          default: AccentColor.Light,
          active: AccentColor.SemiLight,
          hoverFocus: AccentColor.SemiLight,
          disabled: AccentColor.Medium,
        },
      },
      alter: {
        fontColor: {
          default: MainColor.Dark,
          disabled: MainColor.SemiDark,
          active: MainColor.Dark,
          hoverFocus: MainColor.Dark,
        },
        bgColor: {
          default: AlterColor.Light,
          active: AlterColor.SemiLight,
          hoverFocus: AlterColor.SemiLight,
          disabled: AlterColor.Medium,
        },
      },
      outlined: {
        fontColor: {
          default: MainColor.Dark,
          disabled: MainColor.SemiDark,
          active: MainColor.Medium,
          hoverFocus: MainColor.Dark,
        },
        borderColor: {
          default: MainColor.Light,
          active: MainColor.Medium,
          hoverFocus: MainColor.SemiLight,
          disabled: MainColor.SemiDark,
        },
      },
      borderless: {
        fontColor: {
          default: MainColor.Dark,
          disabled: MainColor.SemiDark,
          active: MainColor.Medium,
          hoverFocus: MainColor.Dark,
        },
      },
    },
    input: {
      fontColor: {
        default: AlterColor.Dark,
        disabled: AlterColor.SemiLight,
        placeholder: AlterColor.SemiLight,
      },
      bgColor: {
        default: MainColor.Light,
        focusedActive: MainColor.Light,
        disabled: MainColor.Medium,
      },
      borderColor: {
        default: AccentColor.Medium,
        focusedActive: AccentColor.Light,
        disabled: MainColor.SemiLight,
        invalid: GlobalColor.Error,
      },
    },
  },
  globals: {
    fontColor: AlterColor.Dark,
    bgColor: MainColor.SemiLight,
  },
};
