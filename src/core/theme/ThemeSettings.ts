import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';
import palette from './palette';
import { AppSettings } from '../context/appSettingsContext';

const themeSettings = (appSettings: AppSettings): ThemeOptions => {
  const spacing = (factor: number) => `${0.25 * factor}rem`;
  const breakpoints = () => ({
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  });

  const { themeColor } = appSettings;

  const themeConfig = {
    palette: palette(themeColor),
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor],
      },
    },
  });
};

export default themeSettings;
