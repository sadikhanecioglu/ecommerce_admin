// next
import Head from 'next/head';
import NextLink from 'next/link';
//@mui
import {Link, Stack, Typography} from '@mui/material';
import {styled, useTheme} from '@mui/material/styles';

import {useAuthContext} from '../../auth/useAuthContext';
import {PATH_AUTH} from '../../routes/paths';
import LoginLayout from '../../layouts/login';
import AuthRegisterForm from '../../components/auth-components/AuthRegisterForm';
import LoginGuard from '../../auth/LoginGuard';

const StyledRoot = styled('div')(({theme}) => ({
    height: "100%",
    position: "absolute",
    left: 0,
    width: "100%",
    overflow: "hidden",
}));


export default function LoginPage() {
    const {method} = useAuthContext();
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Login | School Management </title>
            </Head>
            <LoginGuard>
                <LoginLayout>
                    <Stack spacing={1} sx={{mb: 4}}>
                        <Typography sx={[theme.typography.h2, {fontWeight: '500'}]}>Sign Up With Email</Typography>
                        <Typography sx={[theme.typography.body1, {color: theme.palette.primary.grey[200]}]}>Welcome!
                            Please
                            enter your details.</Typography>
                    </Stack>
                    {/* <Tooltip title={method} placement="left">
                            <Box
                                component="img"
                                alt={method}
                                src={`/assets/icons/auth/ic_${method}.png`}
                                sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
                            />
                        </Tooltip>
                        <Alert severity="info">
                            Use email : <strong>demo@schoolmanagment.com</strong> / password :<strong> demo1234</strong>
                        </Alert> */}
                    <AuthRegisterForm/>
                    <Stack alignItems="center" sx={{my: 3}}>
                        <Link component={NextLink} href={PATH_AUTH.login}
                              sx={[theme.typography.body2, {color: theme.palette.primary.grey[200]}]} underline="none">
                            Already have an account? <b>Login</b>
                        </Link>
                    </Stack>
                </LoginLayout>
            </LoginGuard>
        </>
    )
}