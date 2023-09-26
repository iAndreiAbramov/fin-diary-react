import { DefaultTheme } from 'styled-components';

const MainColor = {
  Dark: '#181818',
  SemiDark: '#595959',
  Medium: '#919090',
  SemiLight: '#c4c4c4',
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

const AlertColor = {
  Dark: '#380303',
  SemiDark: '#651010',
  Medium: '#8a1f1f',
  SemiLight: '#be3d3d',
  Light: '#f56b6b',
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
          disabled: MainColor.SemiLight,
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
          default: AccentColor.Medium,
          hoverFocus: AccentColor.Dark,
          active: AccentColor.Dark,
          disabled: AccentColor.Light,
        },
        borderColor: {
          default: AccentColor.Medium,
          hoverFocus: AccentColor.Dark,
          active: AccentColor.Dark,
          disabled: AccentColor.Light,
        },
      },
      borderless: {
        fontColor: {
          default: AccentColor.Medium,
          hoverFocus: AccentColor.Dark,
          active: AccentColor.Dark,
          disabled: AccentColor.Light,
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
        invalid: AlertColor.SemiLight,
      },
    },
  },
  globals: {
    fontColor: AlterColor.Dark,
    bgColor: MainColor.SemiLight,
    fgColor: AlterColor.SemiLight,
  },
};
