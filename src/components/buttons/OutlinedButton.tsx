import {alpha, useTheme} from '@mui/material/styles';
import {ButtonProps} from './types';
import {Button, Typography} from "@mui/material";
import {ReactNode} from "react";

export default function OutlinedButton({
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
        <Button fullWidth={fullWidth} variant="outlined" size={size} startIcon={startIcon} endIcon={endIcon}
                onClick={onClick} href={href}
                sx={{
                    borderColor: theme.palette.primary.system.border,
                    backgroundColor: theme.palette.primary.grey.white,
                    color: `${theme.palette.mode === 'light' ? theme.palette.primary.grey.wolf : theme.palette.primary.grey.white}`,
                    '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: `${theme.palette.mode === 'light' ? alpha(theme.palette.primary.grey.wolf, 0.9) : alpha(theme.palette.primary.grey.white, 0.9)}`,
                    },
                    ...sx,
                }}><Typography sx={[theme.typography.button, {sxText}]}>{text}</Typography>
        </Button>
    )
}
