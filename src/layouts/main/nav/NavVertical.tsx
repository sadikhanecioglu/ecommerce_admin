import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack, Drawer, IconButton, styled, DrawerProps, Avatar, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, useTheme, Divider } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config';
// components
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
import Iconify from '../../../components/iconify';
import { useAuthContext } from 'src/auth/useAuthContext';
import { CustomAvatar } from 'src/components/custom-avatar';
import { dispatch, useSelector } from 'src/redux/store';
import { changeCurrentYear } from 'src/redux/slices/school';
import { useAppSetting } from 'src/components/app-settings';

// ----------------------------------------------------------------------


const StyledDrawer = styled(Drawer, {})<DrawerProps>(({ }) => {

  return {
    position: "relative", //imp
    width: 290, //drawer width
    height: '100%',
    top: 30,
    "& .MuiDrawer-paper": {
      width: 290, //drawer width
      position: "relative", //imp
      transition: "none !important"
    }
  }

})
const StyledSelect = styled(Select)(() => ({


  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #DADBF4;"
    },
    "&:hover fieldset": {
      border: "1px solid #DADBF4;"
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #DADBF4;"
    }
  }




}))


type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
  navConfig: Array<any>;
};

const StyledOverlay = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'transparent',
}));
export default function NavVertical({ openNav, navConfig, onCloseNav }: Props) {
  const { pathname } = useRouter();
  const theme = useTheme();
  const { user, logout } = useAuthContext();
  const {currentBranch} = useAppSetting();
  const isDesktop = useResponsive('up', 'lg');
  const { years, currentSchoolYear } = useSelector((state) => state.school)

  const changeYear = (e: SelectChangeEvent<unknown>) => {
    dispatch(changeCurrentYear(+(e.target.value as string)))
  }

  // useEffect(() => {
  //   if (!openNav) {
  //     onCloseNav();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);



  const renderContent = (
    // <Scrollbar
    //   sx={{

    //     '& .simplebar-content': {

    //       display: 'flex',
    //       flexDirection: 'column',
    //     },
    //   }}
    // >
    <Box>


      <Stack
        spacing={3}
        sx={{
          pt: { xs: 8, md: 1 },
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >

        <Box sx={{ position: 'relative', m: 1, height: 96, backgroundColor: 'transparent' }}>
          <CustomAvatar
            alt={user?.first_name}
            src={user?.profile_image}
            sx={{
              width: 96,
              height: 96,
              zIndex: 11,
              left: 0,
              right: 0,
              top: 0,
              mx: 'auto',
              position: 'absolute',
            }}
          />
          <StyledOverlay />
        </Box>
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 10, mb: 0, fontWeight: 400 }}>
          {user?.first_name + ' '+user?.last_name}
        </Typography>
        <Divider />
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 0, mb: 1, fontWeight: 200 }}>
          {currentBranch?.name}
        </Typography>
        <FormControl>
          <InputLabel id="period_select_label">Period</InputLabel>
          <StyledSelect sx={{ width: 268 }} value={currentSchoolYear?.id.toString() || ""} label="Period" labelId="period_select_label" onChange={changeYear}>
            {years.map((option) => (
              <MenuItem key={option.id} value={option.id}>{option.year_name}</MenuItem>

            ))}
          </StyledSelect>
        </FormControl>

        {/* <NavAccount /> */}
      </Stack>

      <NavSectionVertical data={navConfig} sx={{ pb: 3, mt: 0 }} />
    </Box>
    /*<Box sx={{ flexGrow: 1 }} />

    <NavDocs /> </Scrollbar>*/

  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
        borderRightStyle: 'solid',
        borderRight: '1px solid #DADBF4'
      }}
    >
      <IconButton onClick={onCloseNav}
        sx={{ ml: 2, mt: 2, borderRadius: "8px", border: 1, bgcolor: theme.palette.primary.grey.white, borderColor: theme.palette.primary.system.border, width: '32px', height: '32px', position: 'relative', top: 6, left: 267 }}>
        <Iconify color={theme.palette.primary.grey.wolf} icon="eva:arrow-ios-back-fill" />
      </IconButton>
      {isDesktop ? (
        <StyledDrawer
          open
          variant="permanent"
          PaperProps={{
            sx: {

              mt: -6,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderRightStyle: 'none',
            },
          }}
        >
          {renderContent}
        </StyledDrawer>
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
