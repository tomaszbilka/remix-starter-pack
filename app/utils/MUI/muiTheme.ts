import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

import { fontConfig } from './muiHelpers';

import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    avatarInitials: CSSProperties;
    buttonLarge: CSSProperties;
    buttonMedium: CSSProperties;
    buttonSmall: CSSProperties;
    h7: CSSProperties;
    helperText: CSSProperties;
    inputLabel: CSSProperties;
    inputText: CSSProperties;
    tooltipLabel: CSSProperties;
  }
  interface TypographyVariantsOptions {
    avatarInitials?: CSSProperties;
    buttonLarge?: CSSProperties;
    buttonMedium?: CSSProperties;
    buttonSmall?: CSSProperties;
    h7?: CSSProperties;
    helperText?: CSSProperties;
    inputLabel?: CSSProperties;
    inputText?: CSSProperties;
    tooltipLabel?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    avatarInitials: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
    h7: true;
    helperText: true;
    inputLabel: true;
    inputText: true;
    tooltipLabel: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    textColor: {
      primary: CSSProperties['color'];
      secondary: CSSProperties['color'];
      disabled: CSSProperties['color'];
    };
  }

  interface PaletteOptions {
    textColor: {
      primary: CSSProperties['color'];
      secondary: CSSProperties['color'];
      disabled: CSSProperties['color'];
    };
  }
}

const breakpoints = createBreakpoints({
  values: {
    xs: 340,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

const muiTheme = createTheme({
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          [breakpoints.down('sm')]: {
            '.MuiDialog-paper': {
              margin: '8px',
            },
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: 'pre-wrap',
        },
      },
    },
  },
  palette: {
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      active: 'rgba(0, 0, 0, 0.56)',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0288D1',
      dark: '#01579B',
      light: '#03A9F4',
      contrastText: '#FFFFFF',
    },
    primary: {
      main: '#63D3BF',
      dark: '#4FA999',
      light: '#82DCCC',
      contrastText: '#000000',
    },
    secondary: {
      main: '#212121',
      dark: '#000000',
      light: '#4D4D4D',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      light: '#4CAF50',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ED6C02',
      dark: '#E65100',
      light: '#FF9800',
      contrastText: '#FFFFFF',
    },
    textColor: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: ['Mukta', 'Poppins'].join(','),
    h1: fontConfig('Poppins', 96, 500, 112, -1.5),
    h2: fontConfig('Poppins', 60, 500, 80 - 0.5),
    h3: fontConfig('Poppins', 48, 500, 64),
    h4: fontConfig('Poppins', 34, 500, 40, 0.25),
    h5: fontConfig('Poppins', 24, 500, 32),
    h6: fontConfig('Poppins', 20, 500, 28, 0.15),
    h7: fontConfig('Poppins', 16, 500, 24, 0.15),
    subtitle1: fontConfig('Mukta', 16, 400, 24, 1, true),
    subtitle2: fontConfig('Poppins', 16, 400, 22, 0.1),
    body1: fontConfig('Mukta', 16, 400, 24, 0.15),
    body2: fontConfig('Mukta', 14, 400, 22, 0.17),
    buttonLarge: fontConfig('Mukta', 15, 600, 25, 0.46),
    buttonMedium: fontConfig('Mukta', 14, 600, 24, 0.4),
    buttonSmall: fontConfig('Mukta', 13, 600, 23, 0.46),
    caption: fontConfig('Mukta', 12, 400, 20, 0.4),
    overline: fontConfig('Poppins', 12, 400, 32, 1, true),
    avatarInitials: fontConfig('Poppins', 20, 400, 20, 0.14, true),
    inputLabel: fontConfig('Mukta', 12, 400, 12, 0.15),
    helperText: fontConfig('Mukta', 12, 400, 20, 0.4),
    inputText: fontConfig('Mukta', 16, 400, 24, 0.15),
    tooltipLabel: fontConfig('Mukta', 10, 500, 14),
  },
});

export default muiTheme;
