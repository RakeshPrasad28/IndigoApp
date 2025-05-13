import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TrainingSession = {
  currDesc: string;
  lessonDesc: string;
  deviceId: string;
  ste_date_complete: string | null;
  scheduleStartDate: string;
  rs_scale_id: number;
  rs_task_rating_id: number;
  ebt_scale_id: number;
  rs_reason_scale_id: number;
  level4b: number;
  lstIndicator: string;
  gateIndicator: string;
  le_mdetails_linetra: string;
  curriculumType: string;
  scheduleEndDate: string;
  equipmentId: number;
  currId: number;
  lessonId: number;
  trainingCourseId: string;
  staffNo: string;
  studentId: string;
  supportCrew: string | null;
  otherInstrutor1: string | null;
  otherInstrutor2: string | null;
  traineeName: string;
  sch_time: string;
  loginName: string;
  sessionId: string;
  trainingStatus: string;
  course_code: string | null;
  observerName: string | null;
  otherInstructorName1: string | null;
  otherInstructorName2: string | null;
  le_details_crewed: number;
  instructorId: string;
  aims_courseCode: string | null;
  trainee_password: string;
  lessonAbbr: string;
  sch_code: string;
  arival_airport: string | null;
  dep_airport: string | null;
  currAbbr: string;
  eqp_desc: string;
  template_id: number;
};

interface RowDataState {
  rowData: TrainingSession;
}

const initialState: RowDataState = {
  rowData: {
    currDesc: "A320 PBS IRPC Recurrent Sim Training and Check",
    lessonDesc: "CA40/41",
    deviceId: "CSTPL S1",
    ste_date_complete: null,
    scheduleStartDate: "03-Mar-2024",
    rs_scale_id: 1533978,
    rs_task_rating_id: 0,
    ebt_scale_id: 1581865,
    rs_reason_scale_id: 37,
    level4b: 511554,
    lstIndicator: "N",
    gateIndicator: "N",
    le_mdetails_linetra: "N",
    curriculumType: "REC",
    scheduleEndDate: "03-Mar-2024",
    equipmentId: 1,
    currId: 1100,
    lessonId: 1573245,
    trainingCourseId: "888753",
    staffNo: "16127,25727",
    studentId: "1528028,1528930",
    supportCrew: null,
    otherInstrutor1: null,
    otherInstrutor2: null,
    traineeName: "MITTAL ABHAY (16127),KAPOOR SIDDHANT (25727)",
    sch_time: "00:35-05:35",
    loginName: "16127,25727",
    sessionId: "CSTPL S1-03-03-2024-00:35:00",
    trainingStatus: "P",
    course_code: null,
    observerName: null,
    otherInstructorName1: null,
    otherInstructorName2: null,
    le_details_crewed: 1,
    instructorId: "7343",
    aims_courseCode: null,
    trainee_password: "SW5kaWdvQDEyMw==,SW5kaWdvQDEyMw==",
    lessonAbbr: "Proficient CHECK",
    sch_code: "IRPC",
    arival_airport: null,
    dep_airport: null,
    currAbbr: "S FD IRPC",
    eqp_desc: "A320",
    template_id: 41,
  },
};

const rowData = createSlice({
  name: "rowData",
  initialState,
  reducers: {
    setRowData: (state, action: PayloadAction<{ rowData: TrainingSession }>) => {
      const { rowData } = action.payload;
      state.rowData = rowData;
    },
  },
});

export const { setRowData } = rowData.actions;
export default rowData.reducer;
