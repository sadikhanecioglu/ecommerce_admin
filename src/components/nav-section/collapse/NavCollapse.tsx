// @mui
import { List, ListItemButton, ListItemIcon, ListItemText, Stack, StackProps } from '@mui/material';
// locales
import { useLocales } from '../../../locales';
//

import { useEffect, useState } from 'react';
import { Dashboard, ExpandLess, ExpandMore } from '@mui/icons-material';
import NavItem from './NavItem';

interface Prop extends StackProps {
    data: any[],

}

// ----------------------------------------------------------------------

export default function NavCollapse({ data, sx, ...other }: Prop) {
    const { translate } = useLocales();

    return (
        <Stack sx={sx} {...other}>

            <List key='my-list' disablePadding sx={{ px: 0 }}>
                {data.map((group, i) => {
                    const key = group.subheader || group.items[0].title;
                    return (
                        <NavItem
                            key={i}
                            depth={1}
                            header={group.subheader}
                            childData={group.items}
                            action={group.action}
                            path={group.path}
                            icon={group.icon}

                        />
                    )

                })}


            </List>
        </Stack>
    );
}
