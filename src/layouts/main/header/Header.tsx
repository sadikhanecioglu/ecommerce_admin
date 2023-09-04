import { AppBar, Box, IconButton, Menu, Slide, Stack, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { useAuthContext } from "src/auth/useAuthContext";
import Iconify from "src/components/iconify";
import { useSnackbar } from "src/components/snackbar";
import Logo from "../../../components/logo";
import {
    PATH_ADMIN,
    PATH_AUTH,
    PATH_GENERAL,
    PATH_GUARDIAN,
    PATH_PARENT,
    PATH_STUDENT,
    PATH_TEACHER
} from "../../../routes/paths";
import SvgColor from "src/components/svg-color/SvgColor";

interface Props {
    window?: () => Window;
    children: ReactElement;

}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

type HeaderPros = {
    path:string;
    onOpenNav: VoidFunction;

}


export default function Header({ path ,onOpenNav }: HeaderPros) {
    const { user, logout } = useAuthContext();
    const { replace, push } = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = async () => {
        try {
            logout();
            replace(PATH_AUTH.login);

        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', { variant: 'error' });
        }
    };

    const basePath = (type: string) => {
        switch (type) {
            case "admin":
                return (PATH_ADMIN)
            case "teacher":
                return (PATH_TEACHER)
            case "guardian":
                return (PATH_GUARDIAN)
            case "parent":
                return (PATH_PARENT)
            case "student":
                return (PATH_STUDENT)
            default:
                return (PATH_GENERAL)
        }
    }

    const renderContent = (
        <>
            <Stack
                flexGrow={1}
                direction={"row"}
                alignItems="center"
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1.5 }}
            >

                <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).dashboard)}>
                    <Iconify icon="material-symbols:home" />
                    <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Home</Typography>
                </IconButton>
                <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).notifications)}>
                    <Iconify icon="mdi:bell-notification" />
                    <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Notifications</Typography>
                </IconButton>
                <IconButton sx={{ borderRadius: 1 }} onClick={() => {
                }}>
                    <Iconify icon="ic:round-support-agent" />
                    <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} onClick={() => push(basePath(path).support.list)} variant="body2">Support</Typography>
                </IconButton>
                <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).account_settings)}>
                    <Iconify icon="uiw:setting" />
                    <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Account Settings</Typography>
                </IconButton>
                <IconButton sx={{ borderRadius: 1 }} onClick={handleLogout}>
                    <Iconify icon="material-symbols:logout" />
                    <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Logout</Typography>
                </IconButton>
                {/* <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover /> */}

                {/*
          */}
                {/*
          <ContactsPopover />*/}
                {/*
           */}
            </Stack>
        </>
    )


    const renderMenu = (

        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).dashboard)}>
                <Iconify icon="material-symbols:home" />
                <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Home</Typography>
            </IconButton>
            <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).notifications)}>
                <Iconify icon="mdi:bell-notification" />
                <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Notifications</Typography>
            </IconButton>
            <IconButton sx={{ borderRadius: 1 }} onClick={() => {
            }}>
                <Iconify icon="ic:round-support-agent" />
                <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Support</Typography>
            </IconButton>
            <IconButton sx={{ borderRadius: 1 }} onClick={() => push(basePath(path).account_settings)}>
                <Iconify icon="uiw:setting" />
                <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Account Settings</Typography>
            </IconButton>
            <IconButton sx={{ borderRadius: 1 }} onClick={handleLogout}>
                <Iconify icon="material-symbols:logout" />
                <Typography sx={{ fontSize: 12, mx: 0.3, mt: 0.3 }} variant="body2">Logout</Typography>
            </IconButton>

        </Menu>

    )

    return (
        <HideOnScroll>
            <AppBar elevation={0} sx={{ height: 72, backgroundColor: '#fff', zIndex: 1300 }} color="default">
                <Toolbar>
                    <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'space-between'} alignContent={'center'} justifyItems={''}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={onOpenNav}
                                color="inherit"
                                sx={{ml:-1}}
                            >
                                <SvgColor src="/assets/menu_item.svg" />
                            </IconButton>
                        </Box>
                        <Box sx={{mt:{xs:1}}}>
                            <Logo mini={false} />
                        </Box>

                        <Box sx={{ flexGrow: 1, justifyContent:'flex-end', display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <Iconify icon="mdi:cog-outline" sx={{ mr: 1 }} />
                            </IconButton>

                            {renderMenu}

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {renderContent}
                        </Box>
                    </Stack>

                </Toolbar>
            </AppBar>
        </HideOnScroll>

    );
}