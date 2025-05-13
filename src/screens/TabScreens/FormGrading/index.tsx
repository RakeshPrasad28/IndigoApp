import {View, Text, SafeAreaView} from 'react-native';
import React, {Suspense} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import Loader from '@components/Loader';
import RouteCheckCA42 from '@components/Forms/RoutecheckCA42';

const FormGrading = () => {
  const rowInfo = useSelector((state: RootState) => state.traineeDataReducer);
  const rowData = useSelector((state: RootState) => state.rowData.rowData);

  const renderOutcome = () => {
    switch (rowData.template_id) {
      case 37:
        return <RouteCheckCA42 />; 

      default:
        return <Text>No Grading available</Text>;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Suspense fallback={<Loader />}>
        {rowData.template_id ? renderOutcome() : <Loader />}
      </Suspense>
    </SafeAreaView>
  );
};

export default FormGrading;
