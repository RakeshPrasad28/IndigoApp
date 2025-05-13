import Colors from '@utils/Colors';
import {StyleSheet} from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    inputContainer: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 5,
      marginVertical: 5,
    },
    inputContainerText: {
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputTextProperties: {
      fontSize: 16,
      color: Colors.CLR_BLACK,
    },
  });
};
