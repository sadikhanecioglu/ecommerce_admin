// @mui
import { Box, IconButton, Stack } from '@mui/material';
// config
import { NAV } from '../../../config';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
// components
import Logo from '../../../components/logo';
import { NavSectionMini } from '../../../components/nav-section';
import Iconify from '../../../components/iconify';
import { useTheme } from "@mui/material/styles";
// import navConfig from './config';

// ----------------------------------------------------------------------
type Prop = {
    navConfig: Array<any>;
    onOpenNav: VoidFunction;
}
export default function NavMini({ navConfig, onOpenNav }: Prop) {
    const theme = useTheme();

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 1 },
                width: { lg: NAV.W_DASHBOARD_MINI },

            }}
        >
            <Stack
                sx={{
                    pb: 2,
                    height: 1,
                    position: 'relative',
                    width: NAV.W_DASHBOARD_MINI,
                    borderRight: (theme) => `1px ${theme.palette.divider}`,
                    ...hideScrollbarX,
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                <IconButton onClick={onOpenNav}
                    sx={{ ml: 2, mt: 2, borderRadius: "8px", border: 1, bgcolor: theme.palette.primary.grey.white, borderColor: theme.palette.primary.system.border, width: '32px', height: '32px', position: 'relative', top: 0, left: 16 }}>
                    <Iconify color={theme.palette.primary.grey.wolf} icon="eva:arrow-ios-forward-fill" />
                </IconButton>
                <NavSectionMini data={navConfig} />
            </Stack>
        </Box>
    );
}
