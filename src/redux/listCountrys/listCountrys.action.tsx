import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "@utils/requests_http";

export const listCountrysRequest = createAsyncThunk('get-list-country',
  async (data:any, thunkAPI) => {
    try {
      let response = await Get(`all?fields=name,currencies,flags`, {},true);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        statusCode: (error as any)?.status,
        errorMessage: (error as any)?.data.error.message || 'Erro desconhecido',
      });
    }
  }
);