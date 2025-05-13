import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RoutecheckGrading from './RoutecheckGrading';
import RoutecheckAccordion from './RoutecheckAccordion';

const RouteCheckCA42 = () => {
  const [page, setPage] = useState('Grading');
  return (
    <View>
      {page === 'Grading' ? (
        <RoutecheckGrading setPage={setPage} />
      ) : (
        <RoutecheckAccordion setPage={setPage}/>
      )}
    </View>
  );
};

export default RouteCheckCA42;
