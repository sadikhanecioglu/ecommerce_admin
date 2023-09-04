import {alpha, useTheme} from '@mui/material/styles';
import {ButtonProps} from './types';
import {Button, Typography} from "@mui/material";

export default function TextButton({
                                       fullWidth,
                                       text,
                                       size,
                                       startIcon,
                                       endIcon,
                                       onClick,
                                       href,
                                       sx,
                                       sxText
                                   }: ButtonProps) {
    const theme = useTheme();

    return (
        <Button fullWidth={fullWidth} variant="text" size={size} startIcon={startIcon} endIcon={endIcon}
                onClick={onClick} href={href}
                sx={{
                    color: `${theme.palette.mode === 'light' ? theme.palette.primary.grey.wolf : theme.palette.primary.grey.white}`,
                    '&:hover': {
                        color: `${theme.palette.mode === 'light' ? alpha(theme.palette.primary.grey.wolf, 0.9) : alpha(theme.palette.primary.grey.white, 0.9)}`,
                    },
                    ...sx,
                }}>
            <Typography sx={[theme.typography.button, {sxText}]}>
                {text}
            </Typography>
        </Button>
    )
}
