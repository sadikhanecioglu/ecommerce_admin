// i18n
import '../locales/i18n';
import '../../styles/globals.css'

// scroll bar
import 'simplebar/src/simplebar.css';

import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';

// utils
import createEmotionCache from '../utils/createEmotionCache';
// theme
import ThemeProvider from '../theme';
// locales
import ThemeLocalization from '../locales';
// redux
import { Provider as ReduxProvider } from 'react-redux';

// editor
import 'react-quill/dist/quill.snow.css';

import SnackbarProvider from '../components/snackbar';
import { MotionLazyContainer } from '../components/animate';
import { AuthProvider } from '../auth/JwtContext';
import { SettingsProvider, ThemeSettings } from '../components/settings';
// redux
import { store } from '../redux/store';
import ProgressBar from '../components/progress-bar';
import Head from 'next/head';
import { RealTimeProvider } from 'src/components/real-time';
import { useEffect } from 'react';
import {  AppSettingsProvider } from 'src/components/app-settings/AppSettingsContext';



const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
}


export default function App(props: MyAppProps) {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <>
            <Head>
                <style>
                    @import url(&quot;https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap&quot;);
                </style>
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>
            </Head>
            <CacheProvider value={emotionCache}>

                <AuthProvider>
                    <ReduxProvider store={store}>
                        <SettingsProvider>
                            <MotionLazyContainer>
                                <ThemeProvider>
                                    <ThemeSettings>
                                        <ThemeLocalization>
                                            <SnackbarProvider>
                                                <RealTimeProvider>
                                                    <AppSettingsProvider>
                                                        <ProgressBar />
                                                        {getLayout(<Component {...pageProps} />)}
                                                    </AppSettingsProvider>
                                                </RealTimeProvider>
                                            </SnackbarProvider>
                                        </ThemeLocalization>
                                    </ThemeSettings>
                                </ThemeProvider>
                            </MotionLazyContainer>
                        </SettingsProvider>
                    </ReduxProvider>
                </AuthProvider>
            </CacheProvider>
        </>
    )
}
