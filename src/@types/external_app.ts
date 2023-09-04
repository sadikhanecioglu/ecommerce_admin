

export type IExternalLink = {
    id:number;
    title:string;
    link:string;
    is_active:boolean;
}

export type IExternalLinkState = {
    isLoading: boolean;
    error: Error | string | null;
    externals:IExternalLink[];
    external:IExternalLink | undefined | null;

}