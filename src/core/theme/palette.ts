import { ThemeColor } from '@/types/common';

const DefaultPalette = (themeColor: ThemeColor) => {
  const lightColor = '58, 53, 65';
  const mainColor = lightColor;

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#002984';
    } else {
      return '#6ACDFF';
    }
  };

  return {
    customColors: {
      main: mainColor,
      primaryGradient: primaryGradient(),
      tableHeaderBg: '#F9FAFC',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    primary: {
      light: '#303f9f',
      main: '#1a237e',
      dark: '#0f1661',
      contrastText: '#FFF',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: '#FFF',
      default: '#F4F5FA',
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;
