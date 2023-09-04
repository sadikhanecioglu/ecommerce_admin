import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import Iconify from '../iconify'
import {InlineAccordionProps} from './types'
import {useTheme} from "@mui/material/styles";


export default function InlineAccordion({title, children, sx, isOpen}: InlineAccordionProps) {
    const theme = useTheme();
    return (
        <Accordion disableGutters elevation={0} sx={{border: 1, borderColor: theme.palette.primary.system.border}}>
            <AccordionSummary
                sx={sx}
                expandIcon={<Iconify sx={{width: 32, height: 32}} icon={"material-symbols:arrow-drop-down-rounded"}/>}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )

}

