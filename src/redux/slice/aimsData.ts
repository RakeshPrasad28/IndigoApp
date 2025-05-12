import {
    createAsyncThunk,
    createSlice,
    SerializedError,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  import Config from "react-native-config";
  import { LessonItemProps } from "@screens/MainTabScreens/Grading/interface";
  
  interface AimsState {
    isLoading: boolean;
    data: LessonItemProps[];
    isError: SerializedError | null;
  }
  
  const aimsState: AimsState = {
    isLoading: false,
    data: [],
    isError: null,
  };
  
  export const fetchAimsData = createAsyncThunk<
    LessonItemProps[],
    { staffNo: string }
  >("fetchAimsData", async ({ staffNo }: { staffNo: string }) => {
    try {
  
      const api_url = Config.BASE_URL + `/web_GetAims_Data.get?staffNo=${staffNo}`;
      const response = await axios.get(api_url);
  
      return response.data;
  
    } catch (error) {
      console.log(`Error in fetchAimsData: ${error}`);
    }
  
  });
  
  const aimsDataSlice = createSlice({
    name: "aimsDataSlice",
    initialState: aimsState,
  
    extraReducers: (builder) => {
      builder.addCase(fetchAimsData.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchAimsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchAimsData.rejected, (state, action) => {
        state.isError = action.error;
        state.data = [];
        state.isLoading = false;
      });
    },
    reducers: {},
  });
  
  export default aimsDataSlice.reducer;
  