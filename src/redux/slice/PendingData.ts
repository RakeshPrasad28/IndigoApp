import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "react-native-config";

interface PendingDataItem {
  approveStatus: string;
  cadetName: string;
  cadetStaffNumber: string;
  currDesc: string;
  currId: number;
  curr_type: string;
  eqp_desc: string;
  facultyName: string;
  facultyStaffNumber: string;
  feedbackFlag: string | null;
  le_mdetails_linetra: string;
  lessonAbbr: string;
  lessonDesc: string;
  lessonRatingDesc: string;
  lesson_detailsCrewed: number;
  lesson_id: number;
  markForReview: string | null;
  pass_fail: string;
  schDate: string;
  scheduleId: number;
  sessonId: string;
  template_id: number;
  trainingStatus: string;
  user_id: number;
}

interface PendingDataState {
  isError: SerializedError | null;
  data: PendingDataItem[];
  isLoading: boolean;
}

interface FetchPendingDataPayload {
  staffNo: string; 
}

export const fetchPendingData = createAsyncThunk<PendingDataItem[], FetchPendingDataPayload>(
  "fetchPendingData",
  async ({ staffNo }) => {
    const api_url =
      `${Config.BASE_URL}/web_getPendingGradingData.get?staffNo=${staffNo}`;
    const response = await axios.get(api_url);
    console.log(api_url)
    return response.data; 
  }
);

// Create the slice
const pendingDataSlice = createSlice({
  name: "pendingDataSlice",
  initialState: {
    isError: null,
    data: [],
    isLoading: false,
  } as PendingDataState, 
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchPendingData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPendingData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload; 
    });
    builder.addCase(fetchPendingData.rejected, (state, action) => {
      state.data = [];
      state.isError = action.error;
      state.isLoading = false;
    });
  },
});

export default pendingDataSlice.reducer;
