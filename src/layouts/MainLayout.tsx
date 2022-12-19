import { ReactNode } from 'react';
import DefaultLayout from '@/core/layouts/DefaultLayout';
import { useAppSettings } from '@/core/hooks/useAppSettings';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { appSettings } = useAppSettings();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  console.log('a1 hidden: ', hidden);

  return (
    <DefaultLayout hidden={hidden} appSettings={appSettings}>
      {children}
    </DefaultLayout>
  );
};

export default MainLayout;
