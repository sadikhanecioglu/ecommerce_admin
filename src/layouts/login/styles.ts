// @mui
import { styled, alpha } from '@mui/material/styles';
// utils
import { bgGradient } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(() => ({
  height: '100%',
  display: 'flex',
  position: 'relative',
}));

export const StyledSection = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, rgba(0, 182, 169, 0.1) 0%, rgba(7, 183, 170, 0.1) 1.12%, rgba(11, 183, 171, 0.1) 4.28%, rgba(15, 184, 172, 0.1) 9.19%, rgba(18, 184, 172, 0.1) 15.56%, rgba(20, 185, 172, 0.1) 23.12%, rgba(22, 185, 173, 0.1) 31.56%, rgba(23, 185, 173, 0.1) 40.6%, rgba(26, 185, 173, 0.1) 49.96%, rgba(29, 186, 174, 0.1) 59.34%, rgba(33, 186, 175, 0.1) 68.46%, rgba(39, 187, 175, 0.1) 77.02%, rgba(47, 188, 177, 0.1) 84.75%, rgba(56, 189, 178, 0.1) 91.34%, rgba(69, 191, 180, 0.1) 96.52%, rgba(84, 193, 183, 0.1) 100%);'
  },
}));

export const StyledSectionBg = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  top: 0,
  left: 0,
  zIndex: -1,
  width: '50%',
  height: '100%',
  position: 'absolute',
  transform: 'scaleX(-1)',
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    //padding: theme.spacing(25, 8, 0, 8),
    width: '100%',
  },
}));
