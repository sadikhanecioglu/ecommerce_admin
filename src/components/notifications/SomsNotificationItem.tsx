import { Link, Stack, Typography, useTheme } from "@mui/material";
import { INotification } from "src/@types/notification"
import Iconify from "../iconify/Iconify";
import { useRouter } from "next/router";


type Props = {
    data: INotification;
    linkUrl?: string | null | undefined
}

export default function SomsNotificationItem({ data, linkUrl }: Props) {
    const theme = useTheme();
    const { push } = useRouter();

    const redirect = () => {

        if (linkUrl) {
            push(linkUrl);
        }
    }


    const notContent = () => {

        return (

            <Stack direction={"row"} spacing={2} alignItems={"center"} height={80}
                sx={{
                    border: 1,
                    borderRadius: 1,
                    p: 2,
                    borderColor: returnStyle(data.notification_type).borderColor,
                    backgroundColor: returnStyle(data.notification_type).backgroundColor,
                }}

            >
                <Stack sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: returnStyle(data.notification_type).color
                }}>
                    <Iconify icon={"material-symbols:check-circle-rounded"} color={theme.palette.primary.grey.white} />
                </Stack>
                <Stack direction={"column"}>
                    <Typography variant={"h6"} sx={{ fontWeight: "500" }}>{returnStyle(data.notification_type).title}</Typography>
                    <Typography variant={"body2"} sx={{ fontWeight: "300" }}>{data.message}</Typography>
                </Stack>
            </Stack>)
    }


    if (linkUrl) {
        return (
            <Link underline="none" href={linkUrl} target="_blank">
            {notContent()}
            </Link>
        )
    } else

        return notContent()

}

type notificationTypes = {
    title: string,
    color: string,
    borderColor: string,
    backgroundColor: string,
};

type styleTypes = {
    Support_Request: notificationTypes,
    incident: notificationTypes,
    New_Feed: notificationTypes,
    dismissal: notificationTypes,
    Tracking_for_Student: notificationTypes,
    placeholder: notificationTypes
}

const notificationStyles: styleTypes = {
    Support_Request: {
        title: "Support Request",
        color: "#51DC6A",
        borderColor: "#D4E5D7",
        backgroundColor: "#F3F8F5",
    },
    incident: {
        title: "Incident Report",
        color: "#FB5758",
        borderColor: "#E9D2CA",
        backgroundColor: "#F9F0EA",
    },
    New_Feed: {
        title: "New Feed",
        color: "#3087E9",
        borderColor: "#B6CAE4",
        backgroundColor: "#E8EDF9",
    },
    dismissal: {
        title: "Dismissal Process",
        color: "#FDC022",
        borderColor: "#F1DFBB",
        backgroundColor: "#FDF8EB",
    },
    Tracking_for_Student: {
        title: "Tracking for Student",
        color: "#A08CF0",
        borderColor: "#BCBAEE",
        backgroundColor: "#F6F4FE",
    },
    placeholder: {
        title: "Placeholder",
        color: "#DADBF4",
        borderColor: "#DADBF4",
        backgroundColor: "#FFFFFF",
    }
};

const returnStyle = (type: string) => {

    if (type in notificationStyles)
        return (notificationStyles[type as keyof styleTypes]);
    else
        return (notificationStyles.placeholder)

}