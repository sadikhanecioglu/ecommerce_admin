import { Box, Checkbox, Stack, SxProps, Typography, useTheme } from "@mui/material"


type ColorCheckBoxColors = "Success" | "Error" | "Critical" | "Broken"

type ColorCheckBoxProps = {
    color: ColorCheckBoxColors;
    label: string;
    sx?: SxProps;
}



export default function SomsColorCheckBox({ color = "Success", label, sx }: ColorCheckBoxProps) {

    const theme = useTheme();

    const selectColors = {
        "Success": theme.palette.primary.positive[100],
        "Error": theme.palette.primary.negative,
        "Critical": theme.palette.primary.critical,
        "Broken": theme.palette.primary.broken
    }

    return (

        <Stack direction={"row"} sx={{backgroundColor: theme.palette.primary.grey.riverstone, alignItems: "center", py: 1, justifyContent: "center", borderRadius: .5, width: "100%" }} >
            <Stack direction="row" sx={{justifyContent:'space-between', alignItems: "center", alignContent: 'center' , ...sx}} >
                <Box sx={{ backgroundColor: selectColors[color], ml: 1, p: 1.25, borderRadius: .5 }}></Box>
                <Typography variant="button" sx={{ pl: 1 ,width:1}} >{label}</Typography>

                <Checkbox sx={{ width: 20, height: 20, ml: 2, backgroundColor: '#fff' }} />


            </Stack>
        </Stack>
    )

}