import {Avatar, Box, Stack, Typography, useTheme} from "@mui/material";
import Iconify from "../iconify";
import {PATH_TEACHER} from "../../routes/paths";
import DashboardCard from "./DashboardCard";
import {useRouter} from "next/router";
import {useAuthContext} from "../../auth/useAuthContext";

type Props = {
    data: any[],
    onClick: VoidFunction
}

export default function RewardCard({data, onClick}: Props) {
    const {push} = useRouter()
    const theme = useTheme();

    return (
        <DashboardCard title={"Top Reward User"} buttonText={"View All"}
                       onClick={onClick}>
            {
                data.slice(0, 3).map((item) => {
                    return (
                        <Stack key={item.id} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                <Avatar/>
                                <Stack direction={"column"}>
                                    <Typography
                                        sx={[theme.typography.body2, {color: theme.palette.primary.grey.dark}]}>
                                        {`${item.student_details.first_name} ${item.student_details.last_name}`}
                                    </Typography>
                                    <Stack direction={"row"} spacing={.5} alignItems={"center"}>
                                        <Iconify width={12} color={theme.palette.primary.grey[200]}
                                                 icon={"icon-park-solid:like"}/>
                                        <Typography
                                            sx={[theme.typography.subtitle1, {color: theme.palette.primary.grey.wolf}]}>
                                            {item.rank}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Box sx={{
                                p: 2,
                                borderRadius: 100,
                                backgroundColor: theme.palette.primary.lighter.negative
                            }}/>
                        </Stack>
                    )
                })
            }
        </DashboardCard>
    )
}
