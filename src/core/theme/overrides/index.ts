import { Theme } from '@mui/material/styles';
import MuiButton from './button';
import MuiLink from './link';

const Overrides = (theme: Theme) => {
  const button = MuiButton(theme);

  return Object.assign(button, MuiLink);
};

export default Overrides;
