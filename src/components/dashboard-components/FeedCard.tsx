import {Stack, Typography, useTheme} from "@mui/material";
import Iconify from "../iconify";
import DashboardCard from "./DashboardCard";
import {IFeed} from "src/@types/feed";
import Markdown from "../markdown/Markdown";

type Props = {
    data: IFeed[],
    onClick: VoidFunction
}

export default function FeedCard({data, onClick}: Props) {
    const theme = useTheme();

    return (
        <DashboardCard title={"Feed"} buttonText={"View All"}
                       onClick={onClick}>
            {data.slice(0, 2).map((item) => {
                return (
                    <Stack key={item.id} direction={"column"} spacing={0}>
                        <Typography
                            sx={[theme.typography.body2, {color: theme.palette.primary.grey.wolf}]}>
                            {item.title}
                            <Markdown sx={[theme.typography.body2, {
                                color: theme.palette.primary.grey.wolf,
                                margin: 0,
                                padding: 0
                            }]}>
                                {item.content}
                            </Markdown>
                        </Typography>
                        <Stack direction={"row"} spacing={1} alignItems={"center"}>
                            <Stack direction={"row"} spacing={.5} alignItems={"center"}>
                                <Iconify width={12} color={theme.palette.primary.grey[200]}
                                         icon={"icon-park-solid:like"}/>
                                <Typography
                                    sx={[theme.typography.subtitle1, {color: theme.palette.primary.grey.wolf}]}>
                                    {"0"}
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} spacing={.5} alignItems={"center"}>
                                <Iconify width={12} color={theme.palette.primary.grey[200]}
                                         icon={"material-symbols:mode-comment-outline-rounded"}/>
                                <Typography
                                    sx={[theme.typography.subtitle1, {color: theme.palette.primary.grey.wolf}]}>
                                    {"0"}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                )
            })}
        </DashboardCard>
    )
}
