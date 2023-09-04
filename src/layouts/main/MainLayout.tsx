import { useEffect, useState } from 'react';
// @mui
import { Box, Container } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';
import NavVertical from './nav/NavVertical';
import NavMini from './nav/NavMini';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Stack } from '@mui/system';

// ----------------------------------------------------------------------

type Props = {
    children?: React.ReactNode;
    navConfig: Array<any>;
    breadcrumbs: Array<any>;
};

export default function MainLayout({ children, navConfig, breadcrumbs }: Props) {
    const { themeLayout, openNav, onChangeNavOpen } = useSettingsContext();

    const isDesktop = useResponsive('up', 'lg');

    const [open, setOpen] = useState(false);
    //const [isMini, setIsMini] = useState(true);

    //const isMini = openNav === true;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //setOpen(false);
    };
    const handleToggle = () => {
        const value = !openNav
        onChangeNavOpen(value);
    };
    useEffect(() => {
        setOpen(openNav)
    }, [openNav])

    const renderNavVertical = <NavVertical navConfig={navConfig} openNav={open} onCloseNav={handleToggle} />;

    const renderContent2 = () => {
        return (
            <>
                <Stack sx={{ backgroundColor: '#F6F8FE' }}>
                    <Header path={navConfig[0].subheader} onOpenNav={handleToggle} />

                    <CustomBreadcrumbs
                        sx={{ mx: { xs: 2, sm: 4 }, mt: 11 }}
                        heading=""
                        links={breadcrumbs}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            backgroundColor: '#fff',
                            mx: {xs:0,sm:3},
                            pb: 5

                        }}
                    >
                        {!open ? <NavMini navConfig={navConfig} onOpenNav={handleOpen} /> : renderNavVertical}
                        <Main>{children}</Main>

                    </Box>

                </Stack>
            </>
        );
    };
    return <><AuthGuard>{renderContent2()}</AuthGuard> </>;
}
