import { createSlice } from '@reduxjs/toolkit';
import { listCountrysRequest } from './listCountrys.action';
import { StatusRequestEnum } from '@models/requests-props';
import { ListCountryInteface } from './models/listCountrys.models';

export interface ListCountrysRequestReducer {
    requestStates: StatusRequestEnum,
    errorMessage: string;
    statusCode?: number;
    response: ListCountryInteface[] | undefined;
}

const initialState: ListCountrysRequestReducer = {
    response: undefined,
    requestStates: StatusRequestEnum.none,
    errorMessage: ''
}

const getListCountrysRequest  = createSlice({
    name: 'get-list-country',
    initialState: initialState,
    reducers: {
        resetGetListCountrysRequest: (state) => {
            state.requestStates = StatusRequestEnum.none;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(listCountrysRequest.pending, (state, action) => {
            state.requestStates = StatusRequestEnum.pending;
        });
        builder.addCase(listCountrysRequest.fulfilled, (state, action) => {
            state.response = action.payload;
            state.requestStates = StatusRequestEnum.success;
        });
        builder.addCase(listCountrysRequest.rejected, (state, action) => {
            const payload = action.payload as { statusCode?: number; errorMessage?: string };
            if (payload?.statusCode === 499) {
                state.requestStates = StatusRequestEnum.none;
                state.errorMessage = '';
            } else {
                state.requestStates = StatusRequestEnum.error;
                state.errorMessage = payload?.errorMessage || 'Não foi possível carregar as informações.';
                state.statusCode = payload?.statusCode;
            }
        });
    },
});

export const { resetGetListCountrysRequest } = getListCountrysRequest.actions;
export default getListCountrysRequest.reducer;