import { Box, Button, ButtonGroup, Stack, styled, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";


type Prop = {
    value: Date | null,
    onChange(time: number): void,
    timeList: any[]
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
            marginLeft: -.5
        },
    },
}));

export default function TimeSelect({ onChange, timeList }: Prop) {
    const [currentValue, setCurrentValue] = useState<string>("");
    const OnChangeDate = (event: React.MouseEvent<HTMLElement>, time: string) => {
        setCurrentValue(time);
        onChange(+time);
    }

    return (
        <StyledToggleButtonGroup
            color="primary"
            value={currentValue}
            exclusive
            onChange={OnChangeDate}
            sx={{ flexWrap: "wrap", p: 1, justifyContent: "space-between" }}
        >
            {timeList.map((time,i) => (<ToggleButton key={i} sx={{ p: 1, m: 1 }} value={time.value}>{time.name}</ToggleButton>))}
        </StyledToggleButtonGroup>
    )
}