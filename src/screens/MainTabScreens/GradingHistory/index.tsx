import {View, Text, Animated, Pressable, FlatList} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@redux/store';
import Colors from '@utils/Colors';
import { fetchGradingHistoryData } from '@redux/slice/gradingHistory';
import { screenWidth } from '@utils/Scaling';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Row, Table } from 'react-native-table-component';
import { scheduledTitle } from "./data.json";
import Fonts from '@utils/Fonts';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from './styles';

const GradingHistory = () => {
  const Styles = styles();
  const dispatch = useDispatch<AppDispatch>();
  const {data, isError, isLoading} = useSelector(
    (state: RootState) => state.gradingHistoryReducer,
  );
  const theme = useSelector((state: RootState) => state.theme);
  const bodyWidths = [screenWidth * 0.28, screenWidth * 0.23, screenWidth * 0.28, screenWidth * 0.12];
  const [showPdf, setShowPdf] = useState({
    show: false,
    linkVal: "",
  });

  const handleRefresh = () => {
    dispatch(fetchGradingHistoryData({ staffNo: '7343' }));
  }

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          marginHorizontal: screenWidth * 0.04,
          margin: "auto",
        }}
      >
        <Table>
          <Row
            data={[
              item?.lessonName,
              item?.cadetDetails,
              item?.submittedDate,
              renderEvent(item),
            ]}
            widthArr={bodyWidths}
            style={{
              backgroundColor: theme.mode==="dark"
                ? Colors.CLR_SQUANT
                : Colors.CLR_NORTHBLUE,
              paddingVertical: 10,
              marginVertical: 1,
            }}
            textStyle={{
              fontSize: screenWidth * 0.019,
              color: "white",
              textAlign: "left",
              fontFamily: Fonts.OpenSansRegular,
              marginHorizontal: 10,
            }}
          />
        </Table>
      </View>
    );
  };

  const renderEvent = (item: any) => {
    return (
      <Pressable
        onPress={() => {
          setShowPdf({ show: true, linkVal: item.url });
        }}
        style={Styles.renderContainer}
      >
        <Ionicons name={"eye"} color={"black"} size={25} />
        <Text style={Styles.text}>View</Text>
      </Pressable>
    );
  };

  return (
    <Animated.View
      style={{
        flexGrow: 1,
        backgroundColor: theme.mode==="dark" ? Colors.CLR_BLACK : Colors.CLR_WHITE,
      }}
    >
      <View style={{ alignItems: "flex-end" }}>
        <Pressable style={{ marginRight: 45 }} onPress={handleRefresh}>
          <FontAwesome
            name="refresh"
            color={theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_BLACK}
            size={25}
          />
        </Pressable>
      </View>
      <View
        style={{
          marginHorizontal: screenWidth * 0.04,
          margin: "auto",
          marginTop: 40,
        }}
      >
        <Table>
          <Row
            data={scheduledTitle}
            widthArr={bodyWidths}
            style={{
              backgroundColor: theme.mode==="dark"
                ? Colors.CLR_DARK_CHARCOAL
                : Colors.CLR_GALACTIC,
              paddingVertical: 10,
            }}
            textStyle={{
              fontSize: screenWidth * 0.019,
              color: "white",
              textAlign: "left",
              fontFamily: Fonts.OpenSansRegular,
              marginHorizontal: 10,
            }}
          />
        </Table>
      </View>
      <FlatList
        bounces={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  );
};

export default GradingHistory;
