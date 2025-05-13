import {View, Text} from 'react-native';
import React, {FC} from 'react';

const RoutecheckAccordion: FC<{setPage: (value: string) => void}> = ({
  setPage,
}) => {
  return (
    <View>
      <Text>RoutecheckAccordion</Text>
    </View>
  );
};

export default RoutecheckAccordion;
