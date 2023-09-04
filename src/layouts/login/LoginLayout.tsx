// @mui
import {Grid, Stack} from '@mui/material';
// components
import Logo from '../../components/logo';
import Image from '../../components/image';
//
import {StyledContent, StyledRoot, StyledSection} from './styles';

// ----------------------------------------------------------------------

type Props = {
    title?: string;
    illustration?: string;
    children: React.ReactNode;
};

export default function LoginLayout({children, illustration, title}: Props) {
    return (
        <StyledRoot>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <StyledContent>
                        <Stack sx={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "100%",
                            height: "100%",
                            px: {xs:2,md:12} ,
                            pb: {xs:2,md:12}
                        }}>
                            <Logo mini={false} sx={{py:{md:8},pt:{xs:8}}}/>
                            {children}
                        </Stack>
                    </StyledContent>
                </Grid>
                <Grid item xs={12} md={6} lg={6} display={{xs: 'none', md: 'flex', lg: 'flex'}}>
                    <StyledSection>
                        <Image
                            disabledEffect
                            visibleByDefault
                            alt="auth"
                            src={illustration || '/assets/illustrations/login.png'}
                            //sx={{width: '70%'}}
                        />
                    </StyledSection>
                </Grid>
            </Grid>
        </StyledRoot>
    );
}
