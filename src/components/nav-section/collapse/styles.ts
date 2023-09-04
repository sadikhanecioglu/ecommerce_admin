import { alpha, Collapse, CollapseProps, ListItemButton, styled } from '@mui/material';
import { NavItemProps } from './NavItem'

type StyledItemProps = Omit<NavItemProps, 'item'>;


export const StyledItem = styled(ListItemButton, {

})<StyledItemProps>(({ theme }) => {
    const isLight = theme.palette.mode === 'light';

    ;

    const enteredStyle = {
        color: theme.palette.primary.grey.wolf,
        backgroundColor: theme.palette.primary.grey.riverstone,
    };

    const hoverStyle = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    };

    return {
        // flexDirection: 'column',
        textTransform: 'capitalize',
        // padding: theme.spacing(1, 0, 0.5, 0),
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        '&:hover': hoverStyle,
        '&.	.Mui-selected': enteredStyle


    };
});


export const StyledCollapse = styled(Collapse, {

})<CollapseProps>(({ theme }) => {

    const enteredStyle = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    };
    return {
        '&.MuiCollapse-entered': enteredStyle
    }
});


