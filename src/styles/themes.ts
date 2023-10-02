import { DefaultTheme } from 'styled-components';

const MainColor = {
  Dark: '#3a3937',
  SemiDark: '#5b5957',
  Medium: '#93918d',
  SemiLight: '#ccc7bc',
  Light: '#f8f1db',
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
          default: AccentColor.Dark,
          hoverFocus: AccentColor.Medium,
          active: AccentColor.Medium,
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
    mainMenuItem: {
      fontColor: {
        default: AccentColor.Light,
        active: AccentColor.Medium,
        hoverFocus: AccentColor.Medium,
      },
      bgColor: {
        default: 'none',
        hoverFocus: MainColor.SemiDark,
        active: MainColor.SemiDark,
      },
    },
  },
  globals: {
    bgColor: {
      default: MainColor.Light,
      header: MainColor.Dark,
      footer: MainColor.Dark,
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
