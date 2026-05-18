import { createSlice } from '@reduxjs/toolkit';
import { currencyValueRequest } from './currencyValue.action';
import { CurrencyValueInteface } from './models/currencyValue.models';
import { StatusRequestEnum } from '@models/requests-props';

export interface CurrencyValueRequestReducer {
    requestStates: StatusRequestEnum,
    errorMessage: string;
    statusCode?: number;
    response: CurrencyValueInteface | undefined;
}

const initialState: CurrencyValueRequestReducer = {
    response: undefined,
    requestStates: StatusRequestEnum.none,
    errorMessage: ''
}

const getCurrencyValueRequest  = createSlice({
    name: 'get-currency',
    initialState: initialState,
    reducers: {
        resetGetCurrencyValueRequest: (state) => {
            state.requestStates = StatusRequestEnum.none;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(currencyValueRequest.pending, (state, action) => {
            state.requestStates = StatusRequestEnum.pending;
        });
        builder.addCase(currencyValueRequest.fulfilled, (state, action) => {
            state.response = action.payload;
            state.requestStates = StatusRequestEnum.success;
        });
        builder.addCase(currencyValueRequest.rejected, (state, action) => {
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

export const { resetGetCurrencyValueRequest } = getCurrencyValueRequest.actions;
export default getCurrencyValueRequest.reducer;