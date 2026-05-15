import { configureStore } from '@reduxjs/toolkit';
import getListCountrysRequest from'./listCountrys/listCountrys.store'
import getCurrencyValueRequest from './currencyValue/currencyValue.store'
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        getCurrencyValueRequest:getCurrencyValueRequest,
        getListCountrysRequest:getListCountrysRequest
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, any>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export default store;