import { DefaultTheme } from 'styled-components';

const ThemeColor = {
  MainDark: '#151513',
  MainSemiDark: '#3b3830',
  MainMedium: '#948f7e',
  MainSemiLight: '#c0bdb0',
  MainLight: '#e5e2d9',
  MainError: '#8a1f1f'
} as const;

export const FontColor = {
  Regular: '#9d855f',
  Disabled: '#666252',
  Placeholder: '#e2d8bd',
} as const;

export const darkTheme: DefaultTheme = {
  name: 'dark',
  components: {
    button: {
      fontColor: {
        primary: ThemeColor.MainDark,
        alter: ThemeColor.MainLight,
        bordered: ThemeColor.MainMedium,
        disabled: ThemeColor.MainSemiDark,
        active: ThemeColor.MainMedium,
        alterHoverFocus: ThemeColor.MainDark,
      },
      bgColor: {
        primary: ThemeColor.MainLight,
        alter: ThemeColor.MainDark,
        active: ThemeColor.MainMedium,
        primaryHoverFocus: ThemeColor.MainSemiLight,
        disabled: ThemeColor.MainSemiDark,
      },
    },
    input: {
      fontColor: {
        default: FontColor.Regular,
        disabled: FontColor.Disabled,
        placeholder: FontColor.Placeholder,
      },
      bgColor: {
        default: ThemeColor.MainDark,
        focusedActive: ThemeColor.MainDark,
        disabled: ThemeColor.MainSemiDark,
      },
      borderColor: {
        default: ThemeColor.MainMedium,
        focusedActive: ThemeColor.MainSemiLight,
        disabled: ThemeColor.MainDark,
        invalid: ThemeColor.MainError,
      },
    },
  },
  globals: {
    fontColor: FontColor.Regular,
    bgColor: ThemeColor.MainDark,
  },
};
