import {Stack, Typography, useTheme} from "@mui/material";
import SomsButton from "../pages-components/Buttons";
import {DashboardCardProps} from "../../@types/dashboard";

export default function DashboardCard({title, buttonText, onClick, children}: DashboardCardProps) {
    const theme = useTheme();

    return (
        <Stack direction={"column"} sx={{backgroundColor: theme.palette.primary.grey.white, p: 2, borderRadius: 1}} spacing={2}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography sx={[theme.typography.body2, {fontWeight: "500", color: theme.palette.primary.grey[900]}]}>
                    {title}
                </Typography>
                {buttonText &&                 <SomsButton styleName={"Text"} onClick={onClick} sx={{
                    fontSize: 12,
                    color: theme.palette.primary.grey["200"],
                    border: 0,
                    p: 0,
                    mr: -1,
                    '&:hover': {backgroundColor: "transparent"}
                }}>
                    {buttonText}
                </SomsButton>}

            </Stack>
            <Stack direction={"column"} spacing={2}>
                {children}
            </Stack>
        </Stack>
    )
}
