import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TraineeInfoState {
  staffId: string | null;
  traineeName: string | null;
  studentId: string | null;
  lessonDesc: string | null;
}

const initialState: TraineeInfoState = {
  staffId: null,
  traineeName: null,
  studentId: null,
  lessonDesc: null,
};

export interface SetTraineeInfoPayload {
  id: string;
  name: string;
  studentId: string;
  lessonDesc: string;
}

const traineeData = createSlice({
  name: "traineeData",
  initialState,
  reducers: {
    setTraineeData: (state, action: PayloadAction<SetTraineeInfoPayload>) => {
      const { id, name, studentId, lessonDesc } = action.payload;
      state.traineeName = name;
      state.staffId = id;
      state.studentId = studentId;
      state.lessonDesc = lessonDesc;
    },
  },
});

export const { setTraineeData} = traineeData.actions;
export default traineeData.reducer;
