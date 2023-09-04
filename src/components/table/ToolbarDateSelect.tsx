import { DatePickerProps } from "@mui/lab";
import { IconButton, Stack, Box, useTheme, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Iconify from "../iconify";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { fDate } from "src/utils/formatTime";
import SomsIconButton from "../pages-components/IconButton";




type ToolbarDateSelectSelect = DatePickerProps<Date> & {

    onChangeDate: (mewDate: Date | string | null) => void;
    day:  Date | string | null;


}


export default function ToolbarDateSelect({ day, onChangeDate }: ToolbarDateSelectSelect) {

    const theme = useTheme();

    const handleClickDay = (newDay: number) => {
        const newDate = new Date(day ? day : 0)
        newDate.setDate(newDate.getDate() + newDay);
        onChangeDate(fDate(newDate,"yyyy-MM-dd"));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack direction="row" alignItems="center" sx={{ py:1,px:1,height:58, flexDirection: "row", justifyContent: "center", alignItems: "center",border:'1px solid',borderColor:theme.palette.primary.system.border,borderRadius:1 }}>
                <SomsIconButton styleName="Grey" onClick={() => handleClickDay(-1)} sx={{ backgroundColor: theme.palette.primary.grey.white, borderRadius: 1, '&:hover': { backgroundColor: theme.palette.primary.grey.white } }} size="large">
                    <Iconify icon="eva:arrow-ios-back-fill" color={theme.palette.primary.grey.wolf} sx={{ width: 24, height: 24 }} />
                </SomsIconButton>
                <Box sx={{ py: 1.5, px: 3, mx: -1 }}>   
                    <DatePicker
                        label="Change Date"
                        value={day}
                        onChange={(day) => onChangeDate(day)}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                            <Stack direction={"row"} sx={{ alignItems: 'center' }}>
                                <input {...inputProps} style={{ display: "none" }} />
                                <Typography ref={inputRef} variant="body1" sx={{ color: theme.palette.text.primary, opacity: .8,minWidth:220 }} >{fDate(day,"EEEE, MMMM dd, yyyy")}</Typography>
                                {InputProps?.endAdornment}
                            </Stack>
                        )}
                    />
                </Box>
                <SomsIconButton styleName="Grey" onClick={() => handleClickDay(+1)} sx={{ backgroundColor: theme.palette.primary.grey.white, borderRadius: 1, '&:hover': { backgroundColor: theme.palette.primary.grey.white} }} size="large">
                    <Iconify icon="eva:arrow-ios-forward-fill" color={theme.palette.primary.grey.wolf} sx={{ width: 24, height: 24 }} />
                </SomsIconButton>
            </Stack>
        </LocalizationProvider>
    )

}