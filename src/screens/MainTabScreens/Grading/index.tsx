import {View, Text, Pressable, FlatList} from 'react-native';
import React, {Suspense, useEffect} from 'react';
import {AppDispatch, RootState} from '@redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAimsData} from '@redux/slice/aimsData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Table, Row, TableWrapper} from 'react-native-table-component';
import Colors from '@utils/Colors';
import {scheduledTitle} from './data.json';
import {styles} from './styles';
import {screenWidth} from '@utils/Scaling';
import {LessonItemProps} from './interface';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '@components/PrimaryButton';
import Loader from '@components/Loader';
import {useNetInfo} from '@react-native-community/netinfo';
import TraineeListView from '@components/TraineeListView';
import {setRowData} from '@redux/slice/rowData';
import {navigate} from '@utils/NavigationUtils';
import SCREEN_NAMES from '@utils/screenNames';
import {setTraineeData} from '@redux/slice/traineeData';

const bodyWidths = [
  screenWidth * 0.13,
  screenWidth * 0.13,
  screenWidth * 0.14,
  screenWidth * 0.13,
  screenWidth * 0.16,
  screenWidth * 0.12,
  screenWidth * 0.16,
];

const Grading = () => {
  const Styles = styles();
  const netInfo = useNetInfo();
  const [showTraineeList, setShowTraineeList] = React.useState(false);
  const [currentRowData, setCurrentRowData] =
    React.useState<LessonItemProps | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {data, isLoading, isError} = useSelector(
    (state: RootState) => state.aimsDataReducer,
  );
  const theme = useSelector((state: RootState) => state.theme);
  const handleRefresh = () => {
    dispatch(fetchAimsData({staffNo: '7343'}));
  };

  useEffect(() => {
    dispatch(fetchAimsData({staffNo: '7343'}));
  }, []);

  const renderFlatListItem = ({
    item,
    index,
  }: {
    item: LessonItemProps;
    index: number;
  }) => {
    return (
      <Row
        key={index}
        data={[
          `${item.scheduleStartDate}\n${item.sch_time}`,
          item.deviceId,
          item.currDesc,
          item.lessonDesc,
          item.dep_airport && item.arival_airport ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={Styles.tableBodyCellText}>{item.dep_airport}</Text>
              <Ionicons name="airplane" size={18} color={Colors.CLR_WHITE} />
              <Text style={Styles.tableBodyCellText}>
                {item.arival_airport}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: Colors.CLR_WHITE,
              }}>
              -
            </Text>
          ),
          <View style={{marginRight: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                color: Colors.CLR_WHITE,
              }}>
              {item.staffNo}
            </Text>
          </View>,
          renderButton(item),
        ]}
        widthArr={bodyWidths}
        style={Styles.tableBodyRow}
        textStyle={Styles.tableBodyCellText}
      />
    );
  };

  const handleTraineesButton = (rowData: LessonItemProps) => {
    // console.log(rowData, 'rowdata');
    const staffNo = rowData?.staffNo?.split(',');
    setCurrentRowData(rowData);
    dispatch(setRowData({rowData: rowData}));
    if (staffNo && staffNo.length > 1) {
      setShowTraineeList(true);
    } else {
      const {traineeName, studentId, lessonDesc, staffNo} = rowData;
      const match = traineeName?.match(/(.+?)\s\((\d+)\)/);
      const name = match ? match[1] : '';
      dispatch(
        setTraineeData({
          studentId,
          lessonDesc,
          name,
          id: staffNo,
        }),
      );
      navigate(SCREEN_NAMES.FORMS_TAB_SCREEN);
    }
  };

  const renderButton = (rowData: LessonItemProps) => {
    // console.log(rowData, "rocco");
    const staffLength = rowData?.staffNo.split(',').length;
    const template_id = rowData?.template_id;
    // console.log(staffLength,"template_id", template_id);

    return (
      <View style={{width: screenWidth * 0.13, alignSelf: 'center'}}>
        <PrimaryButton
          handlePress={() => handleTraineesButton(rowData)}
          text={
            staffLength > 1
              ? template_id === 40 || template_id === 59
                ? 'Grade'
                : 'Trainees'
              : 'Grade'
          }
          customStyles={{
            backgroundColor:
              theme.mode === 'dark'
                ? Colors.CLR_SPANISH_GREY
                : Colors.CLR_CORNBLUE,
            borderBottomColor:
              theme.mode === 'dark'
                ? Colors.CLR_CORNBLUE
                : Colors.CLR_MIRROR_LAKE,
          }}
          icon={
            <FontAwesome5
              name="arrow-right"
              size={screenWidth * 0.025}
              color={
                theme.mode === 'dark' ? Colors.CLR_WHITE : Colors.CLR_NORTHBLUE
              }
            />
          }
        />
      </View>
    );
  };

  return (
    <View style={Styles.tableContainer}>
      {isLoading && netInfo.isConnected ? (
        <Loader />
      ) : showTraineeList ? (
        <Suspense fallback={<Loader />}>
          <View style={{paddingHorizontal: 10, flex: 1}}>
            <PrimaryButton
              {...{
                handlePress: () => setShowTraineeList(false),
                text: 'Back',
                icon: (
                  <FontAwesome5
                    name="arrow-left"
                    size={screenWidth * 0.025}
                    color={
                      theme.mode === 'dark'
                        ? Colors.CLR_WHITE
                        : Colors.CLR_NORTHBLUE
                    }
                  />
                ),
                customStyles: {
                  width: screenWidth * 0.13,
                  marginVertical: 10,
                  borderRadius: 888,
                  flexDirection: 'row-reverse',
                },
              }}
            />
            <TraineeListView
              currentRowData={currentRowData}
              setShowTraineeList={setShowTraineeList}
            />
          </View>
        </Suspense>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                Styles.headingText,
                theme.mode === 'dark' && {color: Colors.CLR_WHITE},
              ]}>
              Training Lesson
            </Text>
            <Pressable style={{marginRight: 5}} onPress={handleRefresh}>
              <FontAwesome
                name="refresh"
                color={
                  theme.mode === 'dark' ? Colors.CLR_WHITE : Colors.CLR_BLACK
                }
                size={25}
              />
            </Pressable>
          </View>

          <Table>
            <Row
              data={scheduledTitle}
              widthArr={bodyWidths}
              style={Styles.tableHeaderContainer}
              textStyle={Styles.tableHeaderContainerText}
            />
          </Table>
          <Table>
            <FlatList
              bounces={false}
              data={data}
              renderItem={renderFlatListItem}
              // contentContainerStyle={{paddingBottom: 100}}
              keyExtractor={(item, index) => index.toString()}
            />
          </Table>
        </View>
      )}
    </View>
  );
};

export default Grading;
