/** Dependencies */
import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  common: { black: 'rgba(0, 0, 0, 1)', white: 'rgba(255, 255, 255, 1)' },
  background: { paper: 'rgba(255, 255, 255, 1)', default: 'rgba(249, 251, 253, 1)' },
  primary: {
    light: '#70aaff',
    main: 'rgba(44, 123, 229, 1)',
    dark: '0050b2',
    contrastText: '#fff'
  },
  error: {
    light: '#ff6e83',
    main: 'rgba(230, 55, 87, 1)',
    dark: '#ad002e',
    contrastText: '#fff'
  },
  text: {
    primary: '#12263f',
    secondary: '#6e84a3',
    disabled: 'rgba(17, 3, 3, 1)',
    hint: 'rgba(201, 201, 201, 1)'
  },
  success: {
    main: '#00d97e'
  },
  warning: {
    main: '#f6c343'
  }
};

export default createMuiTheme({
  palette,
  typography: {
    useNextVariants: true
  }
});