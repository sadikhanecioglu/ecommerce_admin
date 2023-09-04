// next
import dynamic from 'next/dynamic';
// @mui
import { Stack, Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// config
import { HEADER } from '../../config';
import {useTheme} from "@mui/material/styles";
//
//const Header = dynamic(() => import('./Header'), { ssr: false });

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function SimpleLayout({ children }: Props) {
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const theme = useTheme();
  return (
        <Stack
          sx={{
            flex: 1,
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'flex-start',
            py: 8,
            px: 24,
            minHeight: "100vh",
            backgroundColor: theme.palette.primary.grey.riverstone
          }}
        >
          {children}
        </Stack>
  );
}
