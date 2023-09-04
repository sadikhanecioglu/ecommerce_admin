import { Button, ButtonProps, IconButton, SxProps, Theme, useTheme } from "@mui/material";
import { OverridableStringUnion } from '@mui/types';

type SomsButtonProps = ButtonProps & {

    styleName: OverridableStringUnion<"Primary" | "Grey" | "Text">
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
    color?: OverridableStringUnion<'primary' | 'secondary'>;
}

export default function SomsIconButton({ styleName, children, color = 'primary', ...other }: SomsButtonProps) {

    const theme = useTheme();
 
    switch (styleName) {
        case "Primary":
            return (
                <IconButton 
                {...other}
                sx={{
                    py: 1,
                    px: 2,
                    backgroundColor: theme.palette[color].main,
                    color: theme.palette.common.white,
                    border: '1px solid #DADBF4',
                    borderRadius: 1,
                    '&:hover': { backgroundColor: theme.palette[color].light },
                }}>{children}</IconButton>
            )

        case "Grey":
            return (
                <IconButton
                    {...other}
                    sx={{
                        py: 1,
                        px: 2,
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.text.primary,
                        border: '1px solid #DADBF4',
                        borderRadius: 1,
                        '&:hover': { backgroundColor: theme.palette.grey[500] }

                    }}

                >{children}</IconButton>
            )
        case "Text":
            return (
                <IconButton sx={{
                    py: 1.5,
                    px: 3,
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.text.primary,
                    border: '1px solid #DADBF4',
                    borderRadius: 1,
                    '&:hover': { backgroundColor: theme.palette.grey[500] }
                }}>{children}</IconButton>
            )

        default:
            break;
    }

    return (
        <Button sx={{
            py: 1.5,
            px: 3,
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
            border: '1px solid #DADBF4',
            borderRadius: 1,
            '&:hover': { backgroundColor: theme.palette.grey[500] }
        }}>{children}</Button>
    )


}