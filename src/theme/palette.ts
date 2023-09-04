import { alpha } from '@mui/material/styles';
import {CommonColors} from "@mui/material/styles/createPalette";

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    main: string,
    secondary: string,
    positive: {
      100: string,
      200: string,
    },
    active: string,
    critical: string,
    negative: string,
    broken: string,
    inactive: string,
    lighter: {
      positive: string,
      active: string,
      critical: string,
      negative: string,
    },
    grey: {
      white: string,
      riverstone: string,
      100: string,
      200: string,
      wolf: string,
      900: string,
      dark: string,
    },
    system: {
      border: string,
      divider: string,
    },
  }
  interface PaletteColor {
    main: string,
    secondary: string,
    positive: {
      100: string,
      200: string,
    },
    active: string,
    critical: string,
    negative: string,
    broken: string,
    inactive: string,
    lighter: {
      positive: string,
      active: string,
      critical: string,
      negative: string,
    },
    grey: {
      white: string,
      riverstone: string,
      100: string,
      200: string,
      wolf: string,
      900: string,
      dark: string,
    },
    system: {
      border: string,
      divider: string,
    },
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const OLIVIA = {
  main: '#00B5AD',
  secondary: '#36516B',
  positive: {
    100: '#33A578',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey  : {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
}

const PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};

const SECONDARY = {
  main: '#E8833B',
  secondary: '#36516B',
  positive: {
    100: '#1CC88A',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey: {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
};

const INFO = {
  main: '#00B5AD',
  secondary: '#36516B',
  positive: {
    100: '#1CC88A',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey: {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
};

const SUCCESS = {
  main: '#33A578',
  secondary: '#36516B',
  positive: {
    100: '#1CC88A',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey: {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
};

const WARNING = {
  main: '#F6C23E',
  secondary: '#36516B',
  positive: {
    100: '#1CC88A',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey: {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
};

const ERROR = {
  main: '#E74A3B',
  secondary: '#36516B',
  positive: {
    100: '#1CC88A',
    200: '#FC5286',
  },
  active: '#36B9CC',
  critical: '#F6C23E',
  negative: '#E74A3B',
  broken: '#A333C8',
  inactive: '#DFE3E8',
  lighter: {
    positive: '#C8FACD',
    active: '#D6E4FF',
    critical: '#FFE9D5',
    negative: '#FFD9D9',
  },
  grey: {
    white: '#FFFFFF',
    riverstone: '#F6F8FE',
    100: '#C4CDD5',
    200: '#637381',
    wolf: '#637381',
    900: '#454F5B',
    dark: '#161C24',
  },
  system: {
    border: '#DADBF4',
    divider: '#E5E8F2',
  },
};



const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: OLIVIA,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    button : {
      primary: '#7AC142',
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    button : {
      primary: '#7AC142',
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
