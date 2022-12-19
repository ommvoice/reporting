import { useContext } from 'react';
import { AppSettingsContext, AppSettingsContextValue } from '../context/appSettingsContext';

export const useAppSettings = (): AppSettingsContextValue => useContext(AppSettingsContext);
