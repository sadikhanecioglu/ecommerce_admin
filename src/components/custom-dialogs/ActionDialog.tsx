import { Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, IconButton, styled } from "@mui/material";
import Iconify from "../iconify";




interface ActionDialogProps extends Omit<DialogProps, 'title'> {
    title: string;
    children?: React.ReactNode;
    action: React.ReactNode;
    open: boolean;
    onClose: VoidFunction;
}

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: VoidFunction;
}

const ActionDialogStyled = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function ProgressDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Iconify sx={{ width: 28, height: 28 }} icon={"mingcute:close-fill"} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}


export default function ActionDialog({
    children,
    title,
    action,
    open,
    onClose,
    ...other }: ActionDialogProps) {

    return (<ActionDialogStyled fullWidth maxWidth="md" open={open} onClose={onClose} {...other}>
        <ProgressDialogTitle id="customized-dialog-title" onClose={onClose}>
            {title}
        </ProgressDialogTitle>
         <DialogContent sx={{ typography: 'body2' }}> {children} </DialogContent>
        <DialogActions>
            {action}
            {/* <Button variant="outlined" color="inherit" onClick={onClose}>
                Cancel
            </Button> */}
        </DialogActions>
    </ActionDialogStyled>)

}