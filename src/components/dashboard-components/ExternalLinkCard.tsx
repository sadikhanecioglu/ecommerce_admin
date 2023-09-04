import { Avatar, Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
import { PATH_TEACHER } from "../../routes/paths";
import DashboardCard from "./DashboardCard";
import { useRouter } from "next/router";
import { useAuthContext } from "../../auth/useAuthContext";
import Paper from '@mui/material/Paper';
import { IExternalLink } from "src/@types/external_app";


type Props = {
    data: IExternalLink[],
    onClick: VoidFunction
}

export default function ExternalLinkCard({ data, onClick }: Props) {
    const { push } = useRouter()
    const theme = useTheme();

    return (
        <DashboardCard title={"External Apps"} 
            onClick={onClick}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">

                    <TableBody>
                        {
                            data.filter(a => a.is_active).map((row) => (

                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link href={row.link} target="_blank">
                                            Click!
                                        </Link>
                                        </TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>

                </Table>
            </TableContainer>

        </DashboardCard>
    )
}
