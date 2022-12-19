import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import overrides from './overrides';
import typography from './typography';
import themeSettings from './ThemeSettings';
import GlobalStyling from './globalStyles';
import { AppSettings } from '../context/appSettingsContext';

interface Props {
  appSettings: AppSettings;
  children: ReactNode;
}

const AppThemeProvider = (props: Props) => {
  const { appSettings, children } = props;
  const coreThemeConfig = themeSettings(appSettings);
  let theme = createTheme(coreThemeConfig);

  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
