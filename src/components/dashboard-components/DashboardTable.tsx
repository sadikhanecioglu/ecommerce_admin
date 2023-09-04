import {SxProps, TableBody, useTheme} from "@mui/material";
import {TableHeadCustom, useTable} from "../table";
import useResponsive from "../../hooks/useResponsive";
import {SomsTable} from "../pages-components/Table";
import {ReactNode} from "react";

type Props = {
    data: any[];
    isLoading: boolean;
    tableHead: any[];
    children: ReactNode;
}

export default function DashboardTable({data, isLoading, tableHead, children}: Props) {
    const theme = useTheme();
    const isDesktop = useResponsive('up', 'lg');
    const {
        order,
        orderBy,
        onSort
    } = useTable({defaultOrderBy: 'created_at'});

    return (
        <SomsTable
            isLoading={isLoading}
            customTableHead={
                <TableHeadCustom
                    order={order}
                    orderBy={orderBy}
                    headLabel={tableHead}
                    rowCount={data.length}
                    onSort={onSort}
                />
            }
            sxTable={{border: 0, mt: 1}}
        >
            <TableBody>
                {children}
            </TableBody>
        </SomsTable>
    )
}