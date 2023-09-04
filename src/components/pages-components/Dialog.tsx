import { Dialog, DialogProps, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
import { ReactNode } from "react";
import SomsButton from "./Buttons";




export type SomsDialogProps = DialogProps & {
    label: string;
    handleClose: VoidFunction;
    children: ReactNode;
    cancelButton?: boolean;
    buttonContent?: ReactNode;

}

export default function SomsDialog({ label, open, cancelButton, children, buttonContent, handleClose, ...other }: SomsDialogProps) {
    const theme = useTheme();
    return (
        <Dialog open={open} onClose={handleClose} scroll={'paper'} fullWidth maxWidth='md' {...other}>
            <Stack sx={{
                p: 3,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: theme.palette.primary.grey.white,
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit",
                borderBottom: 1,
                borderBottomColor: theme.palette.primary.system.border
            }}>
                <Typography sx={[theme.typography.h4, { fontWeight: 500 }]}>{label}</Typography>
                <IconButton onClick={handleClose} sx={{
                    color: theme.palette.primary.grey.wolf,
                    border: '1px solid',
                    borderColor: theme.palette.primary.system.border,
                    borderRadius: 1
                }}>
                    <Iconify sx={{ width: 32, height: 32 }} icon={"material-symbols:close"} /></IconButton>
            </Stack>

            <Stack spacing={3} sx={{ p: 3, flex: 1, flexDirection: "column" }}>
                {children}
            </Stack>
            <Stack sx={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", mr: 3, py: 3, borderTop: 1, borderTopColor: theme.palette.primary.system.border }}>
                {cancelButton === true &&
                    <SomsButton onClick={handleClose} styleName="Grey">
                        Cancel
                    </SomsButton>}

                {buttonContent}
                {/* <SomsLoadingButton isLoading={isLoading} onClick={() => ref.current.click()} styleName="Primary">
                    Send
                </SomsLoadingButton> */}

            </Stack>
        </Dialog>
    )

}