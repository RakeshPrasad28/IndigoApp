import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import Config from "react-native-config";
import axios from "axios";

interface TrainingStatus {
  course: string | null;
  deviceid: string | null;
  id: number;
  lesson: string | null;
  traineeId: string;
  traineeName: string;
  traineeUserId: number;
  trainingStatus: string | null;
}

export interface updatedTraineeListProps {
  isLoading: boolean;
  data: TrainingStatus[] | null;
  isError: SerializedError | null;
}

const initialState: updatedTraineeListProps = {
  isLoading: false,
  data: null,
  isError: null,
};

export const fetchupdatedTraineeList = createAsyncThunk(
  "fetchupdatedTraineeList",
  async (payload: string) => {
    const api_url =
      Config.BASE_URL + `/web_getAllTraineesBycourseId.get?courseId=${payload}`;

    const response = await axios.get(api_url);
    return response.data;
  }
);

const updatedTraineeList = createSlice({
  name: "getupdatedTraineeList",
  initialState: initialState,
  reducers: {
    setupdatedTraineeList: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchupdatedTraineeList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchupdatedTraineeList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchupdatedTraineeList.rejected, (state, action) => {
      state.isError = action.error;
      state.data = null;
      state.isLoading = false;
    });
  },
});

export default updatedTraineeList.reducer;
