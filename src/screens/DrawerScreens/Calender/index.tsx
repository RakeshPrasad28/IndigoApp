import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { fetchAimsData } from '@redux/slice/aimsData';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { fetchPendingData } from '@redux/slice/PendingData';
import { fetchGradingHistoryData } from '@redux/slice/gradingHistory';

const Calender = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
      dispatch(fetchAimsData({staffNo: '7343'}));
      dispatch(fetchPendingData({staffNo: '7343'}));
      dispatch(fetchGradingHistoryData({ staffNo: '7343' }));
    }, []);
  return (
    <View>
      <Text>Calender</Text>
    </View>
  )
}

export default Calender