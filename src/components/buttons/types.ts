import {ButtonBaseProps, SxProps} from "@mui/material";
import React, {ReactNode} from "react";
import {LoadingButtonProps} from "@mui/lab";

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'reset' | 'submit';

export interface ButtonProps extends ButtonBaseProps {
    fullWidth?: boolean;
    text?: React.ReactNode;
    size?: ButtonSize;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: VoidFunction;
    href?: string;
    sxText?: SxProps;
}

export interface LoadingProps extends LoadingButtonProps {
    loading?: boolean;
    type?: ButtonType;
    fullWidth?: boolean;
    text?: string;
    size?: ButtonSize;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: VoidFunction;
    href?: string;
    sxText?: SxProps;
}
