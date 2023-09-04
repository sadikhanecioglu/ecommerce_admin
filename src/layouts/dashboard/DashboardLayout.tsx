import { useState } from 'react';
// @mui
import {Box, Stack} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import RightSide from './side/RightSide';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import {useTheme} from "@mui/material/styles";

// ----------------------------------------------------------------------

type Props = {
    children?: React.ReactNode;
    navConfig:Array<any>;
  };
  
  export default function DashboardLayout({ children,navConfig }: Props) {
    const { themeLayout } = useSettingsContext();
    const theme = useTheme()
    const isDesktop = useResponsive('up', 'lg');
     
    const [open, setOpen] = useState(true);
   
    const handleOpen = () => {
          setOpen(true);
      }
  
    const handleClose = () => {
        console.log("handleClose")
      setOpen(false);
    };
  
    const renderNavVertical = <NavVertical openNav={open} navConfig={navConfig} onCloseNav={handleClose} />;
  
    const renderContent = () => {
  
      return (
        <>
          <Stack
              direction={"row"}
            sx={{
              display: { lg: 'flex' },
              minHeight: { lg: 1 ,md:1},
             
            }}
          >
            {!open ?  <NavMini navConfig={navConfig} onOpenNav={handleOpen} /> : renderNavVertical}
            <Main sx={{backgroundColor: theme.palette.primary.grey.riverstone}}>{children}</Main>
            {isDesktop && <RightSide />}
          </Stack>
        </>
      );
    };
  
    return <AuthGuard> {renderContent()} </AuthGuard>;
  }
  