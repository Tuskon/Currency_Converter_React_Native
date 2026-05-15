import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyValueRequest } from "./models/currencyValue.models";
import { Get } from "../../utils/requests_http";

export const currencyValueRequest = createAsyncThunk('get-currency',
  async (data: CurrencyValueRequest, thunkAPI) => {
    try {
      let response = await Get(`api/${data.firstCountry}/${data.secondCountry}.json`, data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        statusCode: (error as any)?.status,
        errorMessage: (error as any)?.data.error.message || 'Erro desconhecido',
      });
    }
  }
);