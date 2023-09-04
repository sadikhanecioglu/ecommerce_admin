
import { Badge, Link, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { IconButtonAnimate } from "../../../components/animate"
import Iconify from "../../../components/iconify"

type Props = {
    showLink: string;
    unread_count: number | undefined;
}

export default function Notifications({ unread_count, showLink }: Props) {


    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 0,
            }}>
                <Box
                    color={'primary'}

                    sx={{
                        width: 40, height: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        pl: 1

                    }}
                >
                    <Badge badgeContent={unread_count ?? 0}
                        sx={{
                            "& .MuiBadge-badge": {
                                color: "#ffff",
                                backgroundColor: "#33A578"
                            }
                        }}>
                        <Iconify width={21} height={26} icon="eva:bell-fill" />
                    </Badge>
                    <Typography sx={{ pl: 2 }} >Notifications</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    pt: 3,

                }}>
                    <Link href={showLink} underline="none">
                        <Typography variant="body2" sx={{ p: 0, color: 'text.secondary' }}>

                            You have {unread_count ?? 0} unread messages
                        </Typography>
                    </Link>

                </Box>

            </Box>



        </>
    );
}