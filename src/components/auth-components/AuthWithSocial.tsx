// @mui
import { Grid, Stack } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../iconify';
import { OutlinedButton } from "../buttons";

import MicrosoftLogin from 'react-microsoft-login';
import GoogleLogin from 'react-google-login';
import { useCallback, useEffect } from 'react';
// ----------------------------------------------------------------------

type Props = {
    sign: string,
    width: string;
}

export default function AuthWithSocial({ sign, width }: Props) {
    const { loginWithGoogle, loginWithOutlook } = useAuthContext();

    const REACT_APP_GOOGLE_CLIENT_ID = "170621229094-k5eveuecfbi60hobc12gveggnrdf1nk1.apps.googleusercontent.com"
 
    const handleOutlookLogin = async () => {
        try {

            console.log('OUTLOOK LOGIN');
        } catch (error) {
            console.error(error);
        }
    };
    const openGoogleLoginPage = useCallback(() => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const redirectUri = 'api/v1/auth/login/google/';
    
        const scope = [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');
    
        const params = {
          response_type: 'code',
          client_id: REACT_APP_GOOGLE_CLIENT_ID,
          redirect_uri: `http://localhost:3000`,
          prompt: 'select_account',
          access_type: 'offline',
          scope
        };
    
        const urlParams = new URLSearchParams(params).toString();
    
        (window as any).location = `${googleAuthUrl}?${urlParams}`;
      }, []);

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                {/* <GoogleLogin
                scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
                 clientId={REACT_APP_GOOGLE_CLIENT_ID}
                    onSuccess={credentialResponse => {

                        console.log(credentialResponse)
               
                    }}
                    onFailure={(err) => console.log(err)}
                    cookiePolicy={'single_host_origin'}
                /> */}
                {/* <OutlinedButton
                    text={`${sign == 'in' ? 'Sign In With Google' : 'Sign Up With Google'}`}
                    fullWidth
                    startIcon={<Iconify icon="logos:google-gmail"/>}
                    sx={{p: 1.5,width:width}}
                    onClick={handleGoogleLogin}
                /> */}
            </Grid>
            <Grid item xs={12}>
                <Stack>
                <MicrosoftLogin redirectUri='http://localhost:3000' clientId={'8b0f2784-8a1c-48fe-9b32-c966eb8fd11c'} authCallback={(err,data) => {
                    
                    console.log("err",err)
                    console.log("data",data)
                    if (loginWithOutlook && data) {
                        loginWithOutlook(data.accessToken);
                    }
                    }} >
                    <OutlinedButton
                    text={`${sign == 'in' ? 'Sign In With Outlook' : 'Sign Up With Outlook'}`}
                    fullWidth
                    startIcon={<Iconify icon="vscode-icons:file-type-outlook" />}
                    sx={{ p: 1.5, width: width }}
                    onClick={handleOutlookLogin}
                />
                </MicrosoftLogin>
                </Stack>
            </Grid>
        </Grid>
    );
}
