import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import TraineeHeader from '@components/TraineeHeader';
import LessonPlanContainer from '@components/LessonPlanContainer';

const SingleHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <TraineeHeader id={2823} name='Rocco' designation='Captain'/>
        <LessonPlanContainer
          top={0}
          right={0}
          setModalVisible={setModalVisible}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

export default SingleHeader;
