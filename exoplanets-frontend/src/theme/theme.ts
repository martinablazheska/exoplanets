import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    mainBackground: {
      main: string;
    };
    componentBackground: {
      main: string;
    };
    borderColor: {
      main: string;
    };
    discoveryMethods: string[];
  }
  interface PaletteOptions {
    mainBackground?: {
      main?: string;
    };
    componentBackground?: {
      main?: string;
    };
    borderColor?: {
      main?: string;
    };
    discoveryMethods?: string[];
  }

  interface Components {
    header?: {
      height: number;
    };
  }

  interface ComponentsOptions {
    header?: {
      height?: number;
    };
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0F1214',
          fontFamily: '"Montserrat", sans-serif;',
        },
      },
    },
    header: {
      height: 60,
    },
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
  },
  palette: {
    primary: { main: '#fff' },
    mainBackground: { main: '#0F1214' },
    componentBackground: { main: '#0F171F' },
    borderColor: { main: 'rgba(61, 71, 81, 0.3)' },
    discoveryMethods: [
      '#ff7043',
      '#ffc400',
      '#00e676',
      '#c6ff00',
      '#7e57c2',
      '#00e676',
      '#00b0ff',
      '#1de9b6',
      '#ff1744',
      '#d500f9',
      '#2979ff',
    ],
  },
});
