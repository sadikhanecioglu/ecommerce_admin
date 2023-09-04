import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
import { dispatch } from '../store';
import { ISomsUser, IUserState, UserFilter } from 'src/@types/user';



const initialState: IUserState = {
    isLoading: false,
    isUpdateUser: false,
    isFileUpload:false,
    error: null,
    filter: null,
    pagination: {
        count: 0,
        next: null,
        previous: null,
        per_size: 10
    },
    users: [],
    user: undefined
}


const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetError(state) {
            state.error = null;
        },
        filterUser(state, action) {
            state.filter = action.payload;
        },
        getSearchUsersSuccess(state, action) {
            state.isLoading = false;
            state.users = action.payload.results;
            state.pagination.count = action.payload.count;

        },
        createUserSuccess(state, action) {
            state.isLoading = false;
            state.isUpdateUser = true;
            //state.user = action.payload;
            //state.users = [...state.users, action.payload]

        },
        confirmUserSuccess(state, action) {
            state.isLoading = false;
            state.users = state.users.map((user) => {

                if (user.id == action.payload.userId) {
                    user.is_active = action.payload.status == 0 ? false : true;
                }
                return user;
            })
        },
        fileImport(state,action) {

            state.isFileUpload = true;
        },
        resetIsUpdateUser(state) {
            state.isUpdateUser = false;
            state.isFileUpload = false;
        }
    }
})


export default slice.reducer;

export const { filterUser, resetIsUpdateUser,resetError } = slice.actions;

export function getSearchUsers(filter: UserFilter) {
    dispatch(slice.actions.startLoading());
    return async () => {
        try {

            let filterUrl = '/api/v1/auth/get-users-for-admin'
            if (filter.search_text) {
                filterUrl += `/key/${filter.search_text}`;
            }
            if (filter.user_type) {
                filterUrl += `/type/${filter.user_type}`;
            }
            if (filter.search_text || filter.user_type)
                filterUrl += '/';

            const response = await axios.get(`${filterUrl}?limit=${filter.limit}&offset=${filter.offset}`, {

            });
            dispatch(slice.actions.getSearchUsersSuccess(response.data))

        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function getSearchUsersByBranchId(branchId:number, filter: UserFilter) {
    dispatch(slice.actions.startLoading());
    return async () => {
        try {

            let filterUrl = `/api/v1/auth/get-users-for-admin/branch/${branchId}`
            if (filter.search_text) {
                filterUrl += `/key/${filter.search_text}`;
            }
            if (filter.user_type) {
                filterUrl += `/type/${filter.user_type}`;
            }
           
                filterUrl += '/';

            const response = await axios.get(`${filterUrl}?limit=${filter.limit}&offset=${filter.offset}`, {

            });
            dispatch(slice.actions.getSearchUsersSuccess(response.data))

        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function getUsersByType(filter: UserFilter) {
    dispatch(slice.actions.startLoading());
    return async () => {
        try {

            let filterUrl = `/api/v1/auth/get-users-for-admin/type/${filter.search_text}/`

            const response = await axios.get(`${filterUrl}?limit=${filter.limit}&offset=${filter.offset}`, {

            });
            dispatch(slice.actions.getSearchUsersSuccess(response.data))

        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function createUser(user: ISomsUser) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await axios.post('/api/v1/auth/register-user', user, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            dispatch(slice.actions.createUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function updateUser(user: ISomsUser) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await axios.post('/api/v1/auth/edit-profile', {user_id:user.id,identity_number:user.identity_number,phone_number:user.phone_number,gender:user.gender,address:user.address,country:user.country}, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            dispatch(slice.actions.createUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function changePassword(user_password: any) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            const response = await axios.post('/api/v1/auth/change-password', {user_id:user_password.id,old_password:user_password.old_password,new_password:user_password.new_password});
            dispatch(slice.actions.createUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function confirmUser(userId: number, status: number) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await axios.post(`/api/v1/auth/set-user-active-status/${userId}/status/${status}`);
            dispatch(slice.actions.confirmUserSuccess({ userId, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function fileImport(filePayload:any) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("filePayload",filePayload);
            const response = await axios.post(`/api/v1/auth/student-bulk-import/`,filePayload,{
            headers: {
                'content-type': 'multipart/form-data'
            }});
            dispatch(slice.actions.fileImport(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}