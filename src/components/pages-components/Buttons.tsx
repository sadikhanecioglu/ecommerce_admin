import { Button, ButtonProps, SxProps, Theme, useTheme } from "@mui/material";
import { OverridableStringUnion } from '@mui/types';

export type SomsButtonProps = ButtonProps & {
    styleName: OverridableStringUnion<"Primary" | "Grey" | "Text">
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
    color?: OverridableStringUnion<'primary' | 'secondary' | 'warning'>;
  

}

export default function SomsButton({ styleName, sx, children, color = 'primary', ...other }: SomsButtonProps) {

    const theme = useTheme();

    switch (styleName) {
        case "Primary":
            return (
                <Button
                   
                    {...other}
                    sx={{
                        py: 1,
                        px: 2,
                        backgroundColor: theme.palette[color].main,
                        color: theme.palette.common.white,
                        border: '1px solid #DADBF4',
                        borderRadius: 1,
                        '&:hover': { backgroundColor: theme.palette[color].light }, ...sx
                    }}
                >
                    {children}
                </Button>
            )
        case "Grey":
            return (
                <Button
             
                    {...other}
                    sx={{
                        py: 1,
                        px: 2,
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.text.primary,
                        border: '1px solid #DADBF4',
                        borderRadius: 1,
                        '&:hover': { backgroundColor: theme.palette.grey[500] }, ...sx

                    }}
                >
                    {children}
                </Button>
            )
        case "Text":
            return (
                <Button
       
                    {...other}
                    sx={{
                        py: 1.5,
                        px: 3,
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.text.primary,
                        border: '1px solid #DADBF4',
                        borderRadius: 1,
                        '&:hover': { backgroundColor: theme.palette.grey[500] }, ...sx
                    }}
                >
                    {children}
                </Button>
            )
        default:
            break;
    }

    return (
        <Button

            {...other}
            sx={{
                py: 1.5,
                px: 3,
                backgroundColor: theme.palette.common.white,
                color: theme.palette.text.primary,
                border: '1px solid #DADBF4',
                borderRadius: 1,
                '&:hover': { backgroundColor: theme.palette.grey[500] }
            }}
        >
            {children}
        </Button>
    )
}