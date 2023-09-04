import { FilterPaginationDto, PaginationState } from "./base";

export type UserDetails = {
    id: number;
    first_name: string;
    last_name: string;
    profile_image: string;
}

export type ISomsUser = {
    id: number;
    role: string[];
    last_login: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    date_joined: string;
    email: string;
    phone_number: string;
    gender: string;
    address: string;
    country: string;
    detail: string;
    student_id: number | null;
    photoURL:string | undefined;
    branch?:number;
    identity_number:number;
}

export type IUserState = {
    isLoading: boolean;
    isUpdateUser: boolean;
    isFileUpload:boolean;
    error: Error | string | null;
    filter: UserFilter | null;
    pagination: PaginationState;
    users: ISomsUser[];
    user: ISomsUser | undefined;
}


export class UserFilter extends FilterPaginationDto {
    search_text: string | undefined;
    user_type: string | undefined;
}