import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Drawer, IconButton, Stack, styled } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
import Iconify from '../../../components/iconify';
import { useTheme } from "@mui/material/styles";
//

//import NavDocs from './NavDocs';


// ----------------------------------------------------------------------

type Props = {
    openNav: boolean;
    navConfig: Array<any>;
    onCloseNav: VoidFunction;
};
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function NavVertical({ openNav, navConfig, onCloseNav }: Props) {
    const { pathname } = useRouter();
    const theme = useTheme();
    const isDesktop = useResponsive('up', 'lg');

    useEffect(() => {
        if (openNav) {
            //onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <Stack
                spacing={4}
                sx={{
                    pt: 3,
                    pb: 2,
                    px: 2.5,
                    flexShrink: 0,
                }}
            >


                {/* <NavAccount /> */}
            </Stack>

            <NavSectionVertical data={navConfig} sx={{ pb: 3 }} />

            {/*<Box sx={{ flexGrow: 1 }} />

      <NavDocs />*/}
        </Scrollbar>
    );

    return (

        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 1 },
                width: { lg: NAV.W_DASHBOARD },

            }}
        >
            <IconButton onClick={onCloseNav}
                sx={{ ml: 2, mt: 2, borderRadius: "8px", border: 1, bgcolor: theme.palette.primary.grey.white, borderColor: theme.palette.primary.system.border, width: '32px', height: '32px', position: 'fixed', top: 6, left: 266,zIndex:9999 }}>
                <Iconify color={theme.palette.primary.grey.wolf} icon="eva:arrow-ios-back-fill" />
            </IconButton>
            {isDesktop ? (
                <Drawer
                    open={openNav}
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: NAV.W_DASHBOARD,
                            bgcolor: 'transparent',

                        },
                    }}
                >
                    <DrawerHeader>
                        <Logo mini={false} sx={{ mt: 2, mx: 3, height: "40px", width: '140px' }} />

                    </DrawerHeader>
                    {renderContent}
                </Drawer>
            ) : (
                <Drawer
                    open={openNav}
                    onClose={onCloseNav}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    PaperProps={{
                        sx: {
                            width: NAV.W_DASHBOARD,
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </Box>
    );
}
