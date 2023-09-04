import Head from 'next/head';
import NextLink from 'next/link';

import {m} from 'framer-motion';
import {styled, useTheme} from '@mui/material/styles';
import {Box, Container, Link, Stack, Typography} from '@mui/material';
import {MotionContainer, varFade} from '../components/animate';
import {PATH_ADMIN, PATH_ADMISSION, PATH_AUTH, PATH_TEACHER} from '../routes/paths';
import LoginPage from './auth/login';

const StyledRoot = styled('div')(({theme}) => ({
    padding: theme.spacing(10, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15, 0),
    },
}));


export default function HomePage() {

    return(<LoginPage/>)

    const theme = useTheme()


    return (
        <>
            <Head>
                <title>School Management System</title>
            </Head>
            <Box
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    bgcolor: 'background.default',
                }}
            >

                <StyledRoot>
                    <Container component={MotionContainer}>
                        <Stack
                            spacing={3}
                            sx={{
                                textAlign: 'center',
                                mb: {xs: 5, md: 10},
                            }}
                        >
                            <m.div variants={varFade().inUp}>
                                <Typography component="div"
                                            sx={[theme.typography.body1, {color: theme.palette.primary.grey[200]}]}>
                                    School Management System
                                </Typography>
                            </m.div>
                            <m.div variants={varFade().inUp}>
                                <Link href={PATH_AUTH.login} component={NextLink}
                                      sx={theme.typography.body2}>Login</Link>
                            </m.div>
                            <m.div variants={varFade().inUp}>
                                <Link href={PATH_ADMISSION.application} component={NextLink}
                                      sx={theme.typography.body2}>Admission Application</Link>
                            </m.div>
                            <m.div variants={varFade().inUp}>
                                <Link href={PATH_ADMIN.dashboard} component={NextLink} sx={theme.typography.body2}>Admin
                                    Dashboard</Link>
                            </m.div>
                            <m.div variants={varFade().inUp}>
                                <Link href={PATH_TEACHER.dashboard} component={NextLink} sx={theme.typography.body2}>Teacher
                                    Dashboard</Link>
                            </m.div>
                        </Stack>
                    </Container>
                </StyledRoot>

            </Box>
        </>

    )

}