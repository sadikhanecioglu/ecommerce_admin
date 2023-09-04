// next
import Head from 'next/head';
import NextLink from 'next/link';
//@mui
import { Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { PATH_AUTH } from '../../routes/paths';
import LoginLayout from '../../layouts/login';
import AuthLoginForm from '../../components/auth-components/AuthLoginForm';
import LoginGuard from '../../auth/LoginGuard';
import AuthWithSocial from "../../components/auth-components/AuthWithSocial";

const StyledRoot = styled('div')(({ theme }) => ({
    height: "100%",
    position: "absolute",
    left: 0,
    width: "100%",
    overflow: "hidden",
}));

export default function LoginPage() {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Login | School Management </title>
            </Head>
            <LoginGuard>
                <LoginLayout>
                    <Stack spacing={2} sx={{
                            flex: 1,
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            mt:{xs:10,md:12}}}>

                    <Stack spacing={1} sx={{ mb: { md: 0, lg: 0, xl: 3 } }}>
                        <Typography sx={[theme.typography.h2, { fontWeight: '500' }]}>Login</Typography>
                        <Typography sx={[theme.typography.body1, { color: theme.palette.primary.grey[200] }]}>Welcome
                            back! Please
                            enter your details.</Typography>
                    </Stack>
                    <AuthLoginForm />
                    <Divider sx={{ my: 1 }}>
                        <Typography sx={[theme.typography.caption, {
                            color: theme.palette.primary.grey[200],
                            fontWeight: 700
                        }]}>OTHER</Typography>
                    </Divider>
                    <AuthWithSocial width='100%' sign={'in'} />
                    
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12}>
                            <Stack alignItems="center" sx={{ my: 3 }}>
                                <Link component={NextLink} href={PATH_AUTH.register}
                                    sx={[theme.typography.body2, { color: theme.palette.primary.grey[200] }]}
                                    underline="none">
                                    Don&apos;t have an account? <b>Sign Up</b>
                                </Link>
                            </Stack>
                        </Grid> */}
                        {/*
                        <Grid item xs={6}>
                            <Stack alignItems="flex-end" sx={{ my: 2 }}>
                                <Link component={NextLink} href={PATH_AUTH.resetPassword} variant="body2" color="inherit" underline="always">
                                    I forgot my password
                                </Link>
                            </Stack>
                        </Grid>
                        */}
                    </Grid>
                    </Stack>

                </LoginLayout>
            </LoginGuard>
        </>
    )
}