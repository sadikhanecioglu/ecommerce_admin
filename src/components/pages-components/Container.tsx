import { Card, CircularProgress, Divider, Pagination, PaginationItem, Stack, Table, TableContainer, TableProps, useTheme, Box, styled, CardProps } from "@mui/material";
import { ChangeEvent } from "react";

type SomsPagination = {
    page: number;
    count: number;
    isDesktop: boolean;
    handleChange: (e: ChangeEvent<unknown>, page: number) => void;
}

type SomsTableProps = CardProps & {

    toolbarContent?: JSX.Element;
    bottomToolbarContent?: JSX.Element;
    children?: React.ReactNode;
    isLoading?: boolean;


}



export function SomsContainer({ isLoading, toolbarContent, bottomToolbarContent, children }: SomsTableProps) {

    const theme = useTheme();

    return (

        <Card variant='outlined'
            sx={{ border: '1px solid', borderColor: theme.palette.primary.system.border, borderRadius: 1 }}
        >
            <Stack
                spacing={2}
                alignItems="left"

                direction={{
                    xs: 'column',
                    md: 'row',
                }}
                sx={{ px: 2.5, py: 3 }}
            >
                {toolbarContent}
            </Stack>
            <Divider />
            {bottomToolbarContent && <>
                <Stack
                    alignItems="center"
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    sx={{ justifyContent: "space-between", pr: 2 }}
                >
                    {bottomToolbarContent}
                </Stack>
                <Divider />
            </>}

            {children}

        </Card>

    )

}