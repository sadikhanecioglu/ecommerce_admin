import {useState} from 'react';
import * as Yup from 'yup';
// next
// form
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// @mui
import {Alert, IconButton, InputAdornment, Stack} from '@mui/material';
// routes
// auth
import {useAuthContext} from '../../auth/useAuthContext';
// components
import Iconify from '../iconify';
import FormProvider, {RHFTextField} from '../hook-form';
import {alpha, useTheme} from "@mui/material/styles";
import {CLoadingButton} from "../buttons";

// ----------------------------------------------------------------------

type FormValuesProps = {
    email: string;
    password: string;
    afterSubmit?: string;
};

export default function AuthLoginForm() {
    const {login} = useAuthContext();
    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);
    

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        email: 'testadmin@soms.com',
        password: '1234',
    };

    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: {errors, isSubmitting, isSubmitSuccessful},
    } = methods;

    const onSubmit = async (data: FormValuesProps) => {
        try {
            await login(data.email, data.password);
        } catch (error: any) {
            console.error(error);

            reset();

            setError('afterSubmit', {
                ...error,
                message: error.message,
            });
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

                <RHFTextField name="email" label="Email Address"
                              InputProps={{
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <IconButton disabled edge="end">
                                              <Iconify icon={'ph:at'}/>
                                          </IconButton>
                                      </InputAdornment>
                                  ),
                              }}
                />

                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <CLoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitSuccessful || isSubmitting}
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.9),
                        color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    },
                    mt: 3,
                    p: 1.5
                }}
                text='Login'
            />
        </FormProvider>
    );
}
