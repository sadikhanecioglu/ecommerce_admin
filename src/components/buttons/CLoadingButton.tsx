import {alpha, useTheme} from '@mui/material/styles';
import {LoadingProps} from './types';
import {LoadingButton} from "@mui/lab";
import {Typography} from "@mui/material";

export default function CLoadingButton({
                                           loading,
                                           type,
                                           fullWidth,
                                           text,
                                           size,
                                           startIcon,
                                           endIcon,
                                           onClick,
                                           href,
                                           sx,
                                           sxText
                                       }: LoadingProps) {
    const theme = useTheme();

    return (
        <LoadingButton loading={loading} type={type} fullWidth={fullWidth} variant="contained" size={size}
                       startIcon={startIcon} endIcon={endIcon} onClick={onClick} href={href}
                       sx={{
                           backgroundColor: theme.palette.primary.main,
                           color: `${theme.palette.mode === 'light' ? theme.palette.primary.grey.white : theme.palette.primary.grey.wolf}`,
                           '&:hover': {
                               backgroundColor: alpha(theme.palette.primary.main, 0.9),
                               color: `${theme.palette.mode === 'light' ? alpha(theme.palette.primary.grey.white, 0.9) : alpha(theme.palette.primary.grey.wolf, 0.9)}`,
                           },
                           ...sx,
                       }}><Typography sx={[theme.typography.button, {sxText}]}>{text}</Typography>
        </LoadingButton>
    )
}
