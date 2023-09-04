import { useEffect, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Alert, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '..//iconify';
import FormProvider, { RHFCheckbox, RHFTextField } from '../hook-form';
// assets
import { CLoadingButton } from "..//buttons";
import { useTheme } from "@mui/material/styles";
import AuthWithSocial from "./AuthWithSocial";
import RHFRadioGroup from "../hook-form/RHFRadioGroup";

// ----------------------------------------------------------------------

type FormValuesProps = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    gender: string;
    address: string;
    country: string;
    bio: string;
    year_of_experience: number;
    qualification: string;
    user_type: string;
    afterSubmit?: string;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const GENDER_OPTIONS = [
    { 'value': '', 'label': '' },
    { 'value': 'Male', 'label': 'Male' },
    { 'value': 'Female', 'label': 'Female' },
    { 'value': 'Other', 'label': 'Other' },
]
const USER_TYPE_OPTIONS = [
    { 'value': 'student', 'label': 'Student' },
    { 'value': 'teacher', 'label': 'Teacher' },
    { 'value': 'guardian', 'label': 'Guardian' },
    { 'value': 'parent', 'label': 'Parent' },

]

export default function AuthRegisterForm() {
    const { register,isSuccessRegister } = useAuthContext();
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage,setSuccessMessage] = useState<string | undefined>();

    const RegisterSchema = Yup.object().shape({
        // first_name: Yup.string().optional(),
        // last_name: Yup.string().optional(),
        first_name: Yup.string().required('Name required'),
        last_name: Yup.string().required('Last Name required'),
        phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        // gender: Yup.string().optional(),
        // address: Yup.string().optional(),
        // country: Yup.string().optional(),
        // bio: Yup.string().when("user_type", (user_type, schema) => {
        //     if (user_type && user_type === "teacher")
        //         return schema.string().required()
        //     return schema
        // }),
        user_type: Yup.string().required(),
        year_of_experience: Yup.number().when("user_type", (user_type, schema) => {
            if (user_type && user_type === "teacher")
                return schema.required()
            return schema
        }),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        i_agre: Yup.boolean().oneOf([true], 'Field must be checked')
    });

    const defaultValues = {

        first_name: '',
        last_name:'',
        email: '',
        password: '',
        password_confirmation: '',
        user_type: '',

        i_agre: true
    };

    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data: FormValuesProps) => {
        try {
            if (register) {
                await register(data.email, data.password, data.first_name, data.last_name, data.phone_number, data.gender, data.address, data.country, data.user_type, data.bio, data.year_of_experience, data.qualification);
            }
        } catch (error: any) {
            console.error(error);
            //reset();
            let newMessage = ''
            for (const key in error.message) {
                newMessage += `${key}: ${error.message[key].join()} \n`
            }
            setError('afterSubmit', {
                ...error,
                message: newMessage,
            });
        }
    };

    useEffect(() => {

        if(isSuccessRegister){
            setSuccessMessage("The registration process is completed, you will be notified by e-mail when the confirmation is given.");
        }

    },[isSuccessRegister])

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
                {!!successMessage && <Alert severity="success">{successMessage}</Alert>}

                {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="first_name" label="First name" />
          <RHFTextField name="last_name" label="Last name" />
        </Stack> */}
                <RHFTextField name="first_name" label="Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton disabled edge="start">
                                    <Iconify icon={'ph:user-circle-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <RHFTextField name="last_name" label="Last Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton disabled edge="start">
                                    <Iconify icon={'ph:user-circle-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {/*<RHFTextField name="last_name" label="Last name" />
                <RHFTextField name="phone_number" label="Phone Number" />*/}
                <RHFTextField name="email" label="Email Address"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton disabled edge="start">
                                    <Iconify icon={'ph:at'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton disabled edge="end">
                                    <Iconify width={24} color={theme.palette.primary.positive[100]}
                                        icon={'material-symbols:check-circle-rounded'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {/*<RHFSelect
                name="gender"
                 label="Gender"
                
                 >
                    {GENDER_OPTIONS.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </RHFSelect>
                <RHFTextField name="address" label="Address" />
                <RHFSelect name="country" label="Country">
              {countries.map((option) => (
                <option key={option.code} value={option.label}>
                  {option.label}
                </option>
              ))}
            </RHFSelect>
            <RHFTextField name="bio" label="Bio" 
                  fullWidth
                  multiline
                  rows={3} />*/}
                <Typography sx={[theme.typography.body1, { color: theme.palette.primary.grey[200] }]}>
                    Select the type of user you want to register
                </Typography>
                <RHFRadioGroup
                    name="user_type"
                    options={USER_TYPE_OPTIONS}
                />


                {/*<RHFTextField name="year_of_experience" label="Year of Experience" type='number' />
                <RHFTextField name="qualification" label="Qualification"  />*/}
                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <RHFTextField
                    name="password_confirmation"
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <RHFCheckbox
                    name='i_agre'
                    label="I agree to the Terms of Service and Privacy Policy."
                    sx={[theme.typography.body1, { color: theme.palette.primary.grey[200] }]}
                />

                <Grid item>
                    <AuthWithSocial width='99%' sign={'up'} />
                </Grid>

                <CLoadingButton
                    disabled={isSuccessRegister}
                    fullWidth
                    color="inherit"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    sx={{
                        mt: 3,
                        p: 1.5
                    }}
                    text='Sign Up'
                />

            </Stack>
        </FormProvider>
    );
}
