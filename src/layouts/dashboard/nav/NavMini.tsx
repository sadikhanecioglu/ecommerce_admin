// @mui
import {Box, IconButton, Stack} from '@mui/material';
// config
import {NAV} from '../../../config';
// utils
import {hideScrollbarX} from '../../../utils/cssStyles';
// components
import Logo from '../../../components/logo';
import {NavSectionMini} from '../../../components/nav-section';
import Iconify from '../../../components/iconify';
import {useTheme} from "@mui/material/styles";
import { position } from 'stylis';
// import navConfig from './config';

// ----------------------------------------------------------------------
type Prop = {
    navConfig: Array<any>;
    onOpenNav: VoidFunction;
}
export default function NavMini({navConfig, onOpenNav}: Prop) {
    const theme = useTheme();

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: {lg: 1},
                width: NAV.W_DASHBOARD_MINI,
                borderRight:'1px solid rgba(145, 158, 171, 0.24);',
                height:1

            }}
        >
            <Stack
                sx={{
                    pb: 2,
                    height: 1,
                    position:'fixed',
                    width: NAV.W_DASHBOARD_MINI,
                    borderRight: (theme) => `1px ${theme.palette.divider}`,
                    ...hideScrollbarX,

                }}
            >
            <IconButton onClick={onOpenNav}
                sx={{ ml: 2, mt: 2, borderRadius: "8px", border: 1, bgcolor: theme.palette.primary.grey.white, borderColor: theme.palette.primary.system.border, width: '32px', height: '32px', position: 'fixed', top: 6, left: 55,zIndex:9999 }}>
                <Iconify color={theme.palette.primary.grey.wolf} icon="eva:arrow-ios-forward-fill" />
            </IconButton>

                <Logo mini={true} sx={{mx: 'auto', my: 2,width:30}}/>

                <NavSectionMini data={navConfig}/>
            </Stack>
        </Box>
    );
}
