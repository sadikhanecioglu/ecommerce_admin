export type PaginationState = {
    count:number;
    next:string | null;
    previous:string | null;
    per_size:number;

} 

export abstract class FilterPaginationDto {
    limit:number = 10;
    offset:number = 0;
}

export abstract class FilterPageSizeDto {
    page:number = 1;
    page_size:number = 10;
}