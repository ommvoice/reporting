import { AppSettings } from '@/core/context/appSettingsContext';
import { ReactNode } from 'react';

export type ThemeColor = 'primary';

export type LayoutProps = {
  hidden: boolean;
  appSettings: AppSettings;
  children: ReactNode;
};
