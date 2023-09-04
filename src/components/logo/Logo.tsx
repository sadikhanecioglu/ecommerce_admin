import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  mini: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ mini = false, disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    const logo = (
      <Box
        component="img"
        src={mini ? "/assets/logo-mini.png" : "/assets/logo.png"}
        sx={{ width: 150, cursor: 'pointer', ...sx }}
      />
    );

    // const logo = (
    //   <Box
    //     ref={ref}
    //     component="div"
    //     sx={{
    //       width: 40,
    //       height: 40,
    //       display: 'inline-flex',
    //       ...sx,
    //     }}
    //     {...other}
    //   >

    //   </Box>
    // );


    if (disabledLink) {
      return <>{logo}</>;
    }

    return (

      <Link component={NextLink} href="/" sx={{ display: 'contents' }}>{logo}</Link>

    );
  }
);
Logo.displayName = "Logo";
export default Logo;
