import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { AppSettingsConsumer, AppSettingsProvider } from '@/core/context/appSettingsContext';
import AppThemeProvider from '@/core/theme/AppThemeProvider';

type CustomAppProps = AppProps & {
  Component: NextPage;
};

export default function MyApp(props: CustomAppProps) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AppSettingsProvider>
      <AppSettingsConsumer>
        {({ appSettings }) => {
          return (
            <AppThemeProvider appSettings={appSettings}>{getLayout(<Component {...pageProps} />)}</AppThemeProvider>
          );
        }}
      </AppSettingsConsumer>
    </AppSettingsProvider>
  );
}
