import {View, Text, Pressable, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@redux/store';
import Loader from '@components/Loader';
import {Row, Table} from 'react-native-table-component';
import {pendingGradingTitles} from './data.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fetchPendingData} from '@redux/slice/PendingData';
import Colors from '@utils/Colors';
import {screenWidth} from '@utils/Scaling';
import {styles} from './styles';
import PrimaryButton from '@components/PrimaryButton';

const PendingGrading = () => {
  const Styles = styles();
  const dispatch = useDispatch<AppDispatch>();
  const {data, isLoading, isError} = useSelector(
    (state: RootState) => state.pendingDataReducer,
  );
  const theme = useSelector((state: RootState) => state.theme);
  const handleRefresh = () => {
    dispatch(fetchPendingData({staffNo: '7343'}));
  };
  const bodyWidhts = [
    screenWidth * 0.28,
    screenWidth * 0.3,
    screenWidth * 0.12,
    screenWidth * 0.25,
  ];

  const updatePendingData =
    data && data.length > 0
      ? data.reduce((acc: any[], data: any) => {
          if (
            (data.trainingStatus === 'P' || data.approveStatus === 'P') &&
            data.pass_fail === 'F' &&
            data.feedbackFlag !== 'completed'
          ) {
            acc.push({isBoth: 'Feedback', ...data});
            acc.push({isBoth: 'Review', ...data});
          } else if (
            data.trainingStatus === 'P' ||
            data.approveStatus === 'P'
          ) {
            acc.push({isBoth: 'Review', ...data});
          } else if (
            data.pass_fail === 'F' ||
            data.feedbackFlag !== 'completed'
          ) {
            acc.push({isBoth: 'Feedback', ...data});
          }
          return acc;
        }, [])
      : [];

  const renderButton = (data: any) => {
    const trainingStatus = data?.trainingStatus;
    const approveStatus = data?.approveStatus;
    const pass_fail = data?.pass_fail ? data?.pass_fail : null;
    const feedbackFlag = data?.feedbackFlag;
    return (
      <View style={{width: screenWidth * 0.18, alignSelf: 'center'}}>
        <PrimaryButton
          {...{
            handlePress: () => handleFeedbackButton(data),
            text: data?.isBoth,
            // trainingStatus === "P" || approveStatus === "P"
            //   ? "Review"
            //   : "Feedback",
          }}
        />
      </View>
    );
  };

  const handleFeedbackButton = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={Styles.text}>Pending Grading</Text>
            <Pressable style={{marginRight: 35}} onPress={handleRefresh}>
              <FontAwesome
                name="refresh"
                color={
                  theme.mode === 'dark' ? Colors.CLR_WHITE : Colors.CLR_BLACK
                }
                size={25}
              />
            </Pressable>
          </View>
          <View style={Styles.tableContainer}>
            <View>
              <Table>
                <Row
                  data={pendingGradingTitles}
                  widthArr={bodyWidhts}
                  style={Styles.tableHeaderContainer}
                  textStyle={Styles.tableHeaderContainerText}
                />
              </Table>
              {data.length <= 0 ? (
                <Text
                  style={{
                    color:
                      theme.mode === 'dark'
                        ? Colors.CLR_WHITE
                        : Colors.CLR_BLACK,
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  No Pending Grading
                </Text>
              ) : (
                <ScrollView bounces={false}>
                  <Table>
                    {updatePendingData.map((data: any, index) => (
                      <Row
                        key={index}
                        data={[
                          data.currDesc,
                          data.lessonDesc,
                          data.cadetStaffNumber,
                          renderButton(data),
                        ]}
                        widthArr={bodyWidhts}
                        style={Styles.tableBodyRow}
                        textStyle={Styles.tableBodyCellText}
                      />
                    ))}
                  </Table>
                </ScrollView>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default PendingGrading;
