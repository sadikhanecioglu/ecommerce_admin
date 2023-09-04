import { SxProps } from "@mui/material";

export interface InlineAccordionProps {
    children?: React.ReactNode;
    sx?:SxProps;
    title:string;
    isOpen?:boolean;
    
} 

export interface InlineAccordionItemProps {
    children?: React.ReactNode;
    title:string;
    value:string;
    onChangeClose:any;
    application:any;
    StepReviewSchema:any;

}