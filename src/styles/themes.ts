import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  components: {
    button: {
      fontColor: {
        primary: '#1A2121',
        alter: '#6DDAC0',
        bordered: '#137A63',
        disabled: '#1A2A2A',
        active: '#137A63',
        alterHoverFocus: '#1A2121',
      },
      bgColor: {
        primary: '#6DDAC0',
        alter: '#1A2121',
        active: '#137A63',
        primaryHoverFocus: '#00DBA1',
        disabled: '#2D4A44',
      },
    },
    input: {
      fontColor: {
        default: '#F3F8F6',
        disabled: '#BDE2D3',
        placeholder: '#BDE2D3',
      },
      bgColor: {
        default: '#1A2121',
        focusedActive: '#1A2121',
        disabled: '#1A2A2A',
      },
      borderColor: {
        default: '#137A63',
        focusedActive: '#00DBA1',
        disabled: '#1C342F',
      },
    },
  },
  globals: {
    fontColor: '#ffffff',
    bgColor: '#000000',
  },
};
