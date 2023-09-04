import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
import { dispatch } from '../store';
import { IExternalLink, IExternalLinkState } from 'src/@types/external_app';

const initialState: IExternalLinkState = {
    isLoading: false,
    error: null,
    externals: [],
    external: null
}

const slice = createSlice({
    name: 'external',
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
        getExternalsSuccess(state, action) {
            state.isLoading = false;
            state.externals = action.payload;
        },
        getExternalSuccess(state, action) {
            state.isLoading = false;
            state.external = action.payload;
        },
        createExternalSuccess(state, action) {
            state.isLoading = false;
            state.external = action.payload;
            if (state.externals) {
                state.externals = [...state.externals, action.payload]

            }
        },
        putExternalSuccess(state, action) {
            state.isLoading = false;
            state.externals = state.externals.map(e => {
                if (e.id == action.payload.id)
                    return action.payload
                else
                    return e
            })
            state.external = action.payload;
        }
    }
})

export default slice.reducer;

export const { resetError } = slice.actions;

export function getExternals() {

    dispatch(slice.actions.startLoading());

    return async () => {
        try {
            const response = await axios.get('/api/v1/schoold-process/external-link/list');
            dispatch(slice.actions.getExternalsSuccess(response.data))
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }

}

export function getExternalsByBranchId(branchId:number) {

    dispatch(slice.actions.startLoading());

    return async () => {
        try {
            const response = await axios.get(`/api/v1/schoold-process/external-link/list/branch/${branchId}/`);
            dispatch(slice.actions.getExternalsSuccess(response.data))
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }

}

export function createExternal(external: IExternalLink) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));
            const response = await axios.post('/api/v1/schoold-process/external-link/list', external);
            dispatch(slice.actions.createExternalSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function putExternal(external: IExternalLink) {
    dispatch(slice.actions.startLoading());
    return async () => {

        try {
            //await new Promise((resolve) => setTimeout(resolve, 2000));
            const response = await axios.put(`/api/v1/schoold-process/external-link/detail/${external.id}`, external);
            dispatch(slice.actions.putExternalSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}