import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import themeConfig from '@/config/themeConfig';
import { LayoutProps } from '@/types/common';

const DefaultLayoutContainer = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentContainer = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const DefaultLayout = (props: LayoutProps) => {
  const { appSettings, children, hidden } = props;
  const navWidth = themeConfig.navigationSize;
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <DefaultLayoutContainer className="layout-wrapper">
      {!hidden && <nav>myNav</nav>}
      <MainContentContainer className="layout-content-wrapper">
        <MainContent className="layout-page-content">{children}</MainContent>
      </MainContentContainer>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
