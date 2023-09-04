// @mui
import {Avatar, Stack, TableCell, TableRow, Typography} from '@mui/material';
// utils
// @types
// components
import Iconify from '../iconify';
import {useTheme} from '@mui/material/styles';
import {IDismissalProcess} from '../../@types/dismissal';
import {OutlinedButton} from "../buttons";
// ----------------------------------------------------------------------

type Props = {
    row: IDismissalProcess;
    onClick: VoidFunction;
};

export default function DismissalTableRow({row, onClick}: Props) {
    const theme = useTheme();

    return (
        <TableRow hover>
            <TableCell align="center">
                <Typography
                    sx={theme.typography.body2}
                >
                    {row.id}
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Typography
                    sx={theme.typography.body2}
                >
                    {row.student}
                </Typography>
            </TableCell>

            <TableCell width={10}>
                <Avatar src={row.student_detail?.profile_image}></Avatar>
            </TableCell>

            <TableCell align="left">
                <Typography
                    sx={theme.typography.body2}
                >
                    {row.student_detail?.first_name} - {row.student_detail?.last_name}
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Stack direction={'row'} spacing={.5} alignItems={'center'} justifyContent={'center'}>
                    <Iconify icon={'material-symbols:schedule-rounded'} color={theme.palette.primary.grey.wolf}/>
                    <Typography
                        sx={theme.typography.body2}
                    >
                        {(new Date(row.created_at)).toTimeString().slice(0, 5)}
                    </Typography>
                </Stack>
            </TableCell>

            <TableCell align="center">
                <Stack direction={'row'} spacing={.5} alignItems={'center'} justifyContent={'center'}>
                    <Iconify icon={'material-symbols:schedule-rounded'} color={theme.palette.primary.grey.wolf}/>
                    <Typography
                        sx={theme.typography.body2}
                    >
                        {(new Date(row.updated_at)).toTimeString().slice(0, 5)}
                    </Typography>
                </Stack>
            </TableCell>

            <TableCell align="center">
                <OutlinedButton
                    size={'small'}
                    onClick={onClick}
                    text={'Details'}
                />
            </TableCell>
        </TableRow>
    );
}