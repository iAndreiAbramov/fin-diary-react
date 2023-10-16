import { DefaultTheme } from 'styled-components';

const MainColor = {
  Dark: '#282828',
  SemiDark: '#646363',
  Medium: '#8a8a8a',
  SemiLight: '#ababab',
  Light: '#dadada',
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
          default: MainColor.Light,
          disabled: MainColor.SemiLight,
          active: MainColor.Dark,
          hoverFocus: MainColor.Dark,
        },
        bgColor: {
          default: AccentColor.Dark,
          active: AccentColor.SemiDark,
          hoverFocus: AccentColor.SemiDark,
          disabled: AccentColor.Light,
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
          default: AlterColor.SemiLight,
          active: AlterColor.Medium,
          hoverFocus: AlterColor.Medium,
          disabled: AlterColor.Light,
        },
      },
      outlined: {
        fontColor: {
          default: AccentColor.Dark,
          hoverFocus: AccentColor.SemiDark,
          active: AccentColor.SemiDark,
          disabled: AccentColor.SemiLight,
        },
        borderColor: {
          default: AccentColor.Dark,
          hoverFocus: AccentColor.Medium,
          active: AccentColor.Medium,
          disabled: AccentColor.SemiLight,
        },
      },
      borderless: {
        fontColor: {
          default: AccentColor.Dark,
          hoverFocus: AccentColor.SemiDark,
          active: AccentColor.SemiDark,
          disabled: AccentColor.SemiLight,
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
        disabled: MainColor.SemiLight,
      },
      borderColor: {
        default: AccentColor.Dark,
        focusedActive: AccentColor.Medium,
        disabled: MainColor.SemiLight,
        invalid: AlertColor.SemiLight,
      },
    },
    mainMenuItem: {
      fontColor: {
        default: MainColor.Dark,
        active: MainColor.SemiDark,
        hoverFocus: MainColor.SemiDark,
      },
      bgColor: {
        default: 'none',
        hoverFocus: MainColor.SemiLight,
        active: MainColor.SemiLight,
      },
    },
  },
  globals: {
    bgColor: {
      default: MainColor.Light,
      header: MainColor.Light,
      footer: MainColor.Light,
    },
    fontColor: {
      default: AccentColor.Dark,
      inverse: AccentColor.Light,
    },
    fgColor: {
      firstLevel: MainColor.SemiDark,
      secondLevel: MainColor.Medium,
    },
    errorText: AlertColor.Medium,
  },
};
