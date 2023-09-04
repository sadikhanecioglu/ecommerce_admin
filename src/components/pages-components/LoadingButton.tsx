import { LoadingButton } from "@mui/lab";
import { Button, ButtonProps, SxProps, Theme, useTheme } from "@mui/material";
import { OverridableStringUnion } from '@mui/types';

type SomsButtonProps = ButtonProps & {

    styleName: OverridableStringUnion<"Primary" | "Grey" | "Text">
    children?: React.ReactNode;
    sx?: SxProps<Theme>;
    color?: OverridableStringUnion<'primary' | 'secondary'>;
    isLoading: boolean;
}

export default function SomsLoadingButton({ styleName, isLoading, children, color = 'primary', ...other }: SomsButtonProps) {

    const theme = useTheme();

    switch (styleName) {
        case "Primary":
            return (
                <LoadingButton
                    loading={isLoading}
                    {...other}
                    sx={{
                        py: 1,
                        px: 2,
                        backgroundColor: theme.palette[color].main,
                        color: theme.palette.common.white,
                        border: '1px solid #DADBF4',
                        borderRadius: 1,
                        '&:hover': { backgroundColor: theme.palette[color].light },
                    }}>{children}</LoadingButton>
            )

        case "Grey":
            return (
                <LoadingButton
                    loading={isLoading}
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

                >{children}</LoadingButton>
            )
        case "Text":
            return (
                <LoadingButton 
                loading={isLoading}
                {...other}    
                sx={{
                    py: 1.5,
                    px: 3,
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.text.primary,
                    border: '1px solid #DADBF4',
                    borderRadius: 1,
                    '&:hover': { backgroundColor: theme.palette.grey[500] }
                }}>{children}</LoadingButton>
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