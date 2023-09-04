import {ReactNode} from "react";
import {Stack, SxProps, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

type Props = {
    children: ReactNode,
    title: string,
    sx?: SxProps
}
export default function ReportCard({children, title, sx}:Props) {
    const theme = useTheme()

    return(
        <Stack sx={{border: 1, borderRadius: 2, borderColor: theme.palette.primary.grey[100], p: 3, height: 450, justifyContent: "space-between", ...sx}}>
            <Typography sx={[theme.typography.h5, {fontWeight: "500"}]}>{title}</Typography>
            {children}
        </Stack>
    )
}