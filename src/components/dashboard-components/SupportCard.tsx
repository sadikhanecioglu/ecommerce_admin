import {Box, Stack, Typography, useTheme} from "@mui/material";
import SomsButton from "../pages-components/Buttons";
import {useRouter} from "next/router";
import {PATH_TEACHER} from "../../routes/paths";
import DashboardCard from "./DashboardCard";
import { ISupport } from "src/@types/support";

type Props = {
    data: ISupport[],
    onClick: VoidFunction
}

export default function SupportCard({data, onClick}: Props) {
    const {push} = useRouter()
    const theme = useTheme();

    return (
        <DashboardCard title={"New Support Requests"} buttonText={"View All"}
                       onClick={onClick}>
            {
                data.slice(0, 2).map((item) => {
                    return (
                        <Stack key={item.id} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Stack direction={"column"} spacing={1}>
                                <Typography
                                    sx={[theme.typography.body2, {color: theme.palette.primary.grey.wolf}]}>
                                    {item.title}
                                </Typography>
                                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                                    <Box sx={{
                                        py: .7,
                                        px: 2,
                                        fontSize: 12,
                                        borderRadius: 1,
                                        border: item.status == "AC"  ? 0 : 1,
                                        borderColor: theme.palette.primary.grey["100"],
                                        color: item.status == "AC" ? theme.palette.primary.grey.white : theme.palette.primary.grey["900"],
                                        backgroundColor: item.status == "AC" ? theme.palette.primary.positive["100"] : theme.palette.primary.grey.white
                                    }}>
                                        {item.status == "AC" ? "Active" : "Closed"}
                                    </Box>
                                    <SomsButton styleName={"Text"} onClick={() => {
                                    }} sx={{
                                        fontSize: 12,
                                        color: theme.palette.primary.grey.white,
                                        border: 0,
                                        backgroundColor: theme.palette.primary.grey["900"],
                                        py: .5,
                                        mr: -1,
                                        '&:hover': {backgroundColor: theme.palette.primary.grey.wolf}
                                    }}>
                                        View
                                    </SomsButton>
                                </Stack>
                            </Stack>
                        </Stack>
                    )
                })
            }
        </DashboardCard>
    )
}
