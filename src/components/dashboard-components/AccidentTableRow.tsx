// @mui
import {Button, TableCell, TableRow, Typography,} from '@mui/material';
// utils
// @types
// components
import {useTheme} from '@mui/material/styles';
import {IAccidentIncident} from 'src/@types/accident';

// ----------------------------------------------------------------------

type Props = {
    row: IAccidentIncident;
    onClick: VoidFunction
};

export default function AccidentTableRow({
                                             row,
    onClick
                                         }: Props) {
    const theme = useTheme();

    return (
        <>
            <TableRow hover>
                <TableCell align="center">
                    <Typography
                        variant="subtitle2"
                        sx={{color: theme.palette.grey[700]}}
                    >
                        {row.id}
                    </Typography>
                </TableCell>

                <TableCell align="left">
                    <Typography
                        variant="subtitle2"
                        sx={{color: theme.palette.grey[700]}}
                    >
                        {row.student_detail.first_name + ' ' + row.student_detail.last_name}
                    </Typography>
                </TableCell>

                <TableCell align="left">
                    <Typography
                        variant="subtitle2"
                        sx={{color: theme.palette.grey[700]}}
                    >
                        {row.created_at}
                    </Typography>
                </TableCell>

                <TableCell align="left">
                    <Typography
                        variant="subtitle2"
                        sx={{color: theme.palette.grey[700]}}
                    >
                        {row.details}
                    </Typography>
                </TableCell>

                <TableCell align="left">
                    <Typography
                        variant="subtitle2"
                        sx={{color: theme.palette.grey[700]}}
                    >
                        {row.updated_at}
                    </Typography>
                </TableCell>

                <TableCell align="center">
                    <Button size={"small"} variant="contained" color="secondary" onClick={onClick}
                            sx={{mx: 1, '&:hover': {backgroundColor: theme.palette.secondary.light}}}>
                        Details
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}
