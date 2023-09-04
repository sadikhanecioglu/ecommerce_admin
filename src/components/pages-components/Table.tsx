import {
    Card,
    CircularProgress,
    Divider,
    Pagination,
    PaginationItem,
    Stack,
    Table,
    TableContainer,
    TableProps,
    useTheme,
    Box,
    styled,
    SxProps
} from "@mui/material";
import { ChangeEvent } from "react";
import {RHFCheckbox} from "../hook-form";
import {SystemStyleObject} from "@mui/system";

type SomsPagination = {
    page: number;
    count: number;
    isDesktop: boolean;
    handleChange: (e: ChangeEvent<unknown>, page: number) => void;
}

type SomsTableProps = TableProps & {
    toolbarContent?: JSX.Element;
    bottomToolbarContent?: JSX.Element;
    children?: React.ReactNode;
    customTableHead?: JSX.Element;
    PaginationElement?: JSX.Element;
    isLoading?: boolean;
    pagination?: SomsPagination;
    footer?: JSX.Element;
    sxTable?: SystemStyleObject;
}


const StyledPaginationItem = styled(PaginationItem)(({theme}) => ({

        '&.MuiPaginationItem-root':{
            marginInline: 8,
            backgroundColor: theme.palette.primary.grey.white,
            color: theme.palette.primary.grey.wolf,
        },
        '&.Mui-selected':{
            color:theme.palette.primary.grey[900],
            backgroundColor:theme.palette.primary.grey.riverstone,
           
        }

}))

export function SomsTable({ sxTable, isLoading, toolbarContent, bottomToolbarContent, customTableHead, pagination, children, footer }: SomsTableProps) {

    const theme = useTheme();

    return (

        <Card variant='outlined' sx={{ border: '1px solid', borderColor: theme.palette.primary.system.border, borderRadius: 1, ...sxTable}}>
            {toolbarContent &&
                <Stack
                    spacing={2}
                    alignItems="left"

                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    sx={{px: 2.5, py: 3}}
                >
                    {toolbarContent}
                </Stack>
            }
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
            <TableContainer sx={{ position: 'relative', }}>
                <Table size={'medium'} sx={{ minWidth: 800 }}>
                    {/* {isLoading == true &&
                        <Box sx={{ width: 1,height:1, position:'absolute',textAlign:'center',zIndex:99, backgroundColor:'#00000017', alignContent: 'center', alignItems: 'center', p: 1 }}  >
                            <CircularProgress sx={{position:'relative',top:'50%'}} />
                        </Box>
                    } */}
                    {customTableHead && customTableHead}
                    {children}
                </Table>
            </TableContainer>
            {footer}
            {pagination &&
                <>
                    <Divider />
                    <Stack sx={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", my: 2 }}>
                        <Pagination
                            count={pagination.count}
                            variant="outlined"
                            shape="rounded" 
                            size="large" boundaryCount={pagination.isDesktop ? 3 : 0}
                            //count={admissionData.length/8}
                            page={pagination.page} 
                            onChange={pagination.handleChange}
                            renderItem={(item) => (
                                <StyledPaginationItem
                                    style={{

                                        
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </>
            }
        </Card>

    )

}