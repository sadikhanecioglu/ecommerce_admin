import { ThemeContext } from "@emotion/react";
import { ButtonProps, Tabs, Tab, useTheme, TabsProps, styled } from "@mui/material";
import { SyntheticEvent } from "react";


interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme }) => ({
    backgroundColor:theme.palette.primary.grey.riverstone,
    width:'100%',
    borderRadius:theme.spacing(1),
    borderColor:theme.palette.primary.system.border,
    padding:theme.spacing(2),
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'transparent'
    },
}));

interface StyledTabProps {
    label: string;
    value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.grey.wolf,
    '&.Mui-selected': {
        color: '#fff',
        backgroundColor: theme.palette.primary.secondary,
        border:'1px solid;',
        borderRadius:theme.spacing(1)
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'transparent',
    },
}));


type SomsFilterTabProps = TabsProps & {
    value: string;
    onChangeFilter: (newValue: string) => void;
    options: any[];
    valueFiled: string;
    labelField: string;
}

export default function SomsFilterTab({ options, value, valueFiled, labelField, onChangeFilter, ...other }: SomsFilterTabProps) {

    const theme = useTheme();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);
        onChangeFilter(newValue.toString());
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            {...other}
        >
            {options.map((tab_data, index) => {
                return (<StyledTab key={index} value={tab_data[valueFiled]} label={tab_data[labelField]} />)
            })}

        </StyledTabs>
    )

}
