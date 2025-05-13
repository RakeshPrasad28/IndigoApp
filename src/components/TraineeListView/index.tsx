import {View, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Row, Table} from 'react-native-table-component';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@redux/store';
import {screenWidth} from '@utils/Scaling';
import {styles} from './styles';
import Colors from '@utils/Colors';
import {fetchupdatedTraineeList} from '@redux/slice/getUpdatedTraineeList';
import {LessonItemProps} from '@screens/MainTabScreens/Grading/interface';
import PrimaryButton from '@components/PrimaryButton';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { navigate } from '@utils/NavigationUtils';
import SCREEN_NAMES from '@utils/screenNames';
import { setTraineeData, SetTraineeInfoPayload } from '@redux/slice/traineeData';

const traineeListTitle = ['Trainee Id', 'Name', 'Grade'];
const bodyWidhts = [screenWidth * 0.2, screenWidth * 0.5, screenWidth * 0.27];

type TraineeListViewProps = {
  currentRowData: LessonItemProps | null;
  setShowTraineeList:(value:boolean)=>void
};

const TraineeListView: FC<TraineeListViewProps> = ({currentRowData,setShowTraineeList}) => {
  // console.log(currentRowData, 'inside');
  const Styles = styles();
  const dispatch = useDispatch<AppDispatch>();
  if (!currentRowData) return null;

  const {traineeName, studentId, lessonDesc} = currentRowData;
  const studentIdupd = studentId.split(',');
  const traineeData = traineeName.split(',');
  const updatedTraineeList = useSelector(
    (state: RootState) => state.getUpdatedTraineeList,
  );

  const theme = useSelector((state: RootState) => state.theme);

  const mappedData = traineeData
    .map(entry => {
      const trimmedEntry = entry.trim();

      // Use regex to capture the name and ID
      const match = trimmedEntry.match(/(.+?)\s\((\d+)\)/);

      if (match) {
        const name = match[1];
        const id = match[2];
        return {name, id};
      }

      return null;
    })
    .filter(Boolean);

  const traineeInfo = mappedData.map((trainee, index) => ({
    ...trainee,
    studentId: studentIdupd[index],
    lessonDesc: lessonDesc,
  }));


  let filteredTraineeList: {
    studentId: string;
    lessonDesc: string;
    name?: string | undefined;
    id?: string | undefined;
  }[] = [];

  if (updatedTraineeList.data != null) {
    for (let i = 0; i < updatedTraineeList.data.length; i++) {
      for (let j = 0; j < traineeInfo.length; j++) {
        if (updatedTraineeList.data![i].traineeId === traineeInfo[j].id) {
          filteredTraineeList.push(traineeInfo[j]);
        }
      }
    }
  }

  useEffect(() => {
    dispatch(fetchupdatedTraineeList(currentRowData.trainingCourseId));
  }, []);

  const handleButtonPress = (rowInfo:SetTraineeInfoPayload)=>{
    dispatch(setTraineeData(rowInfo))
    navigate(SCREEN_NAMES.FORMS_TAB_SCREEN)
    setShowTraineeList(false)
    // console.log(rowInfo, 'rowInfo');
  }

  const renderButton = (rowInfo:any) => {
    return (
      <View style={{ width: screenWidth * 0.15 }}>
        <PrimaryButton
          {...{
            handlePress: () => handleButtonPress(rowInfo),
            text: "Grade",

            icon: (
              <FontAwesome5Icon
                name="arrow-right"
                size={screenWidth * 0.03}
                color={theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_NORTHBLUE}
              />
            ),
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <Table>
        <Row
          data={traineeListTitle}
          widthArr={bodyWidhts}
          style={[Styles.tableHeaderContainer, {paddingVertical: 10}]}
          textStyle={[Styles.tableHeaderContainerText]}
        />
      </Table>
      <Table>
        {filteredTraineeList.map((data, index) => (
          <Row
            key={index}
            data={[data.id, data.name, renderButton(data)]}
            widthArr={bodyWidhts}
            style={[
              Styles.tableBodyRow,
              {paddingVertical: 10, backgroundColor: Colors.CLR_PICHOLINE},
            ]}
            textStyle={[Styles.tableBodyCellText, {textAlign: 'left'}]}
          />
        ))}
      </Table>
    </View>
  );
};

export default TraineeListView;
