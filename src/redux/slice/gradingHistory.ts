import {
    createAsyncThunk,
    createSlice,
    SerializedError,
  } from "@reduxjs/toolkit";
import axios from "axios";
  import Config from "react-native-config";
  
  export const fetchGradingHistoryData = createAsyncThunk<
    any,
    { staffNo: string }
  >("fetchGradingHistoryData", async ({ staffNo }: { staffNo: string }) => {
    
  
    const api_url = Config.BASE_URL + `/web_fetchFiles.get?staffNo=${staffNo}`;
    const response = await axios.get(api_url);
    return response.data;
  });
  
  export interface GradingHistoryState {
    isError: SerializedError | null;
    data: [];
    isLoading: boolean;
  }
  
  const gradingHistoryState: GradingHistoryState = {
    isError: null,
    data: [],
    isLoading: false,
  };
  
  const gradingHistorySlice = createSlice({
    name: "gradingHistorySlice",
    initialState: gradingHistoryState,
  
    reducers: {},
  
    extraReducers: (builder) => {
      builder.addCase(fetchGradingHistoryData.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchGradingHistoryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchGradingHistoryData.rejected, (state, action) => {
        state.isError = action.error;
        state.isLoading = false;
        state.data = [];
      });
    },
  });
  
  export default gradingHistorySlice.reducer;
  