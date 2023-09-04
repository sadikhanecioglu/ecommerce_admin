import { Grid, Typography, Button, useTheme, IconButton, Collapse } from "@mui/material";
import { Stack } from "@mui/system";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import FormContent from "../admission-components/FormContent";
import Iconify from "../iconify";
import { InlineAccordionItemProps } from "./types";
import {CLoadingButton, ContainedButton} from "../buttons";


export default function InlineAccordionItem({ title, value, children, onChangeClose, application, StepReviewSchema}: InlineAccordionItemProps) {
    const [open, setOpen] = useState<boolean>();
    const theme = useTheme()
    const ref = useRef<HTMLButtonElement>() as MutableRefObject<HTMLButtonElement>;
    // useEffect(() =>{

    //     if(!open){
    //         onChangeClose()
    //     }


    // }, [open])


    const handleNext = (data:any) => {
        onChangeClose(data);
        setOpen(false);
    }


    return (
        <FormContent _ref={ref} handleNext={handleNext} defaultValues={application} schema={StepReviewSchema} title=''>
            <Grid container spacing={2} sx={{ py: 2, alignItems: "center" }}>
                <Grid item xs={4}>
                    <Typography sx={[theme.typography.body1, {color: theme.palette.primary.grey.dark, fontWeight: 500}]}>{title}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={[theme.typography.body1, {color: theme.palette.primary.grey.wolf, fontWeight: 500}]}>{value}</Typography>
                </Grid>
                <Grid item xs={4}>
                    {!open &&
                        <ContainedButton
                            onClick={() => { setOpen(true) }}
                            sx={{ textTransform: 'none', backgroundColor: theme.palette.primary.grey[900], '&:hover': { backgroundColor: theme.palette.primary.grey.wolf }, float: "right" }}
                            text={"Edit"}
                        />
                    }
                    {open &&
                        <IconButton edge={"end"} onClick={() => { setOpen(false) }} sx={{ textTransform: 'none', '&:hover': { backgroundColor: "transparent" }, float: "right" }}>
                            <Iconify width={32} color={theme.palette.primary.grey[900]} icon="mdi:close-box" />
                        </IconButton>
                    }
                </Grid>
            </Grid>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container spacing={4} sx={{flex: 1, flexDirection: "row", alignItems: "center", pb: 1}}>
                    {children}
                    <Grid item xs={12} md={2}>
                        <CLoadingButton
                            type="submit"
                            onClick={() => {ref.current.click()}}
                            text={'Save'}
                            sx={{ textTransform: 'none', py: 1.5, px: 3 }}
                        />
                    </Grid>
                </Grid>
            </Collapse>
        </FormContent>
    )

}