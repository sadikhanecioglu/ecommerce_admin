import {
    Avatar,
    Box,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    styled,
    Typography
} from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../../auth/useAuthContext";
import NavCollapse from "../../../components/nav-section/collapse/NavCollapse";
import { NAV } from "../../../config";
import { getPathByUserRole, PATH_ADMIN, PATH_AUTH } from "../../../routes/paths";
import Notifications from "./Notifications";
import Image from '../../../components/image';
import Scrollbar from "src/components/scrollbar";
import { useRouter } from "next/router";
import { useSnackbar } from "src/components/snackbar";
import { dispatch, useSelector } from "src/redux/store";
import { changeCurrentYear } from "src/redux/slices/school";
import { useAppSetting } from "src/components/app-settings";

const StyledOverlay = styled('div')(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 8,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
}));


const YEARS = [{ 'label': '2022-2023', 'value': '2022-2023' }, { 'label': '2021-2022', 'value': '2021-2022' }]


export default function RightSide() {

    const { user, logout } = useAuthContext();
    const { logOutBranch, currentUserRole,currentBranch } = useAppSetting();
    const { replace, push } = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const { unread_count } = useSelector((state) => state.notification);
    const { years, currentSchoolYear } = useSelector((state) => state.school)

    const changeYear = (e: SelectChangeEvent) => {
        dispatch(changeCurrentYear(+e.target.value))
    }

    const handleLogout = async () => {
        try {
            logout();
            replace(PATH_AUTH.login);

        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', { variant: 'error' });
        }
    };

    const handleChangeBranch = async () => {
        try {
            if (logOutBranch) {
                logOutBranch();
                push(PATH_ADMIN.branch);
            }

        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', { variant: 'error' });
        }
    };

    const RIGHT_NAV = [
        {
            subheader: 'User Type',
            items: user?.role.map((role: string) => {
                return { title: role, path: getPathByUserRole(role).dashboard, icon: '' }
            }),
            icon: 'mdi:card-account-mail'
        },
        {
            subheader: 'Account settings',
            path: getPathByUserRole(user?.role[0]).account_settings,
            icon: 'mdi:cog'
        },
        {
            subheader: 'LogOut',
            icon: 'mdi:logout',
            action: handleLogout
        }
    ]

    if (currentUserRole == "admin") {
        RIGHT_NAV.push({
            subheader: 'Change Branch',
            action: handleChangeBranch,
            icon: 'mdi:cog'
        })
    }


    return (<>
        <Box
            component="div"
            sx={{

                width: { lg: NAV.W_DASHBOARD },
                flexShrink: 1,


            }}
        >
            <Stack sx={{ textAlign: 'center', mt: 2 }}>
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
                        spacing={2}
                        sx={{


                            m: 1,

                        }}
                    >
                        <Box sx={{ position: 'relative', m: 1, height: 96, backgroundColor: 'transparent' }}>
                            <Avatar
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
                        <Typography variant="h5" sx={{ mt: 10, mb: 2, fontWeight: 400 }}>
                            {user?.first_name +" "+ user?.last_name}
                        </Typography>
                        <Divider />
                        <Typography variant="body2" sx={{ mt: 10, mb: 2, fontWeight: 400 }}>
                            {currentBranch?.name}
                        </Typography>
                        <FormControl>
                            <InputLabel id="period_select_label">Period</InputLabel>
                            <Select value={currentSchoolYear?.id.toString() || ""} label="Period" labelId="period_select_label" onChange={changeYear}>
                                {years.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>{option.year_name}</MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                        <Box sx={{ pb: 0, pt: 1 }}>
                            <NavCollapse data={RIGHT_NAV} />
                        </Box>
                    </Stack>
                    <Divider variant="middle" />
                    <Stack sx={{ pb: 0, padding: 2 }}>
                        <Notifications unread_count={unread_count} showLink={getPathByUserRole(user?.role[0]).notifications} />
                    </Stack>
                    <Divider variant="middle" />
                    {/* <Stack sx={{pb: 0, padding: 2}}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column'
                        }}>
                            <Typography variant="h6">NEW</Typography>
                            <Image
                                disabledEffect
                                visibleByDefault
                                alt={''}
                                src={'/assets/demo/Rectangle 20.png'}
                                sx={{width: 1}}
                            />
                            <Image
                                disabledEffect
                                visibleByDefault
                                alt={''}
                                src={'/assets/demo/Rectangle 20.png'}
                                sx={{width: 1}}
                            />
                        </Box>


                    </Stack>
                    <Stack sx={{pb: 0, padding: 2}}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column'
                        }}>
                            <Typography variant="h6">BEFORE THAT </Typography>
                            <Image
                                disabledEffect
                                visibleByDefault
                                alt={''}
                                src={'/assets/demo/Rectangle 22.png'}
                                sx={{width: 1}}
                            />
                            <Image
                                disabledEffect
                                visibleByDefault
                                alt={''}
                                src={'/assets/demo/Rectangle 22.png'}
                                sx={{width: 1}}
                            />
                        </Box>


                    </Stack> */}

                </Scrollbar>

            </Stack>
        </Box>
    </>)
}


