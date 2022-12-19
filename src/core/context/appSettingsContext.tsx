import { createContext, useState, ReactNode } from 'react';
import { ThemeColor } from '@/types/common';

export type AppSettings = {
  themeColor: ThemeColor;
};

export type AppSettingsContextValue = {
  appSettings: AppSettings;
};

const initialSettings: AppSettings = {
  themeColor: 'primary',
};

export const AppSettingsContext = createContext<AppSettingsContextValue>({
  appSettings: initialSettings,
});

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [appSettings] = useState<AppSettings>({
    ...initialSettings,
  });

  return <AppSettingsContext.Provider value={{ appSettings }}>{children}</AppSettingsContext.Provider>;
};

export const AppSettingsConsumer = AppSettingsContext.Consumer;
