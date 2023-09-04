// next
import NextLink from 'next/link';
import { Dashboard, ExpandLess, ExpandMore, FiberManualRecord, ContactMail } from "@mui/icons-material"
import { Collapse, Link, List, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from 'react';
import { StyledItem } from './styles';
import Iconify from 'src/components/iconify/Iconify';





export type INavItem = {
    header: string;
    childData?: any[];
    path?: string;
    icon: string;
    action?: VoidFunction;
    active?: boolean;
    open?: boolean;
    depth: number;
}

export type NavItemProps = INavItem & ListItemButtonProps;

export default function NavItem({ header, path, icon, action, childData }: NavItemProps) {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const renderItemButton = () => {

        return (
            <StyledItem selected={open} onClick={handleToggle} header={''} icon={''} depth={0} >
                <ListItemIcon sx={{ minWidth: 26 }}>
                    <Iconify icon={icon} />
                </ListItemIcon>
                <ListItemText sx={{ pl: 2 }} primary={header} />
                {childData && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledItem>)
    }

    return (
        <>
            {path &&
                <Link component={NextLink} href={path} rel="noopener" underline="none">
                    {renderItemButton()}
                </Link>
            }
            {action != null && !path && <Link onClick={action} rel="noopener" underline="none">
                {renderItemButton()}
            </Link>
            }
            {childData && renderItemButton()
            }

            {childData &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List key={header} component="div" disablePadding>
                        {childData?.map((data, i) => (
                            <Link key={data.title + data.path} component={NextLink} href={data.path} rel="noopener" underline="none">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon sx={{ minWidth: 7 }}>
                                        <FiberManualRecord sx={{ width: 7, height: 7 }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ pl: 2, fontSize: 14 }} primary={data.title} />
                                </ListItemButton>
                            </Link>

                        ))}

                    </List>
                </Collapse>
            }

        </>
    )
} 