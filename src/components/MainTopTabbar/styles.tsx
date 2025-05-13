import Colors from '@utils/Colors';
import Fonts from '@utils/Fonts';
import {StyleSheet} from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.CLR_SKY,
      marginTop: 20,
    },
    text: {
      fontSize: 25,
      textAlign: 'center',
      margin: 5,
    },
    singleTabView: {
      padding: 8,
      borderColor: Colors.CLR_SKY,
      borderWidth: 2,
      paddingLeft: 25,
      paddingRight: 25,
    },
    textStyle: {
      fontSize: 16,
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: Fonts.OpenSansRegular,
      color: Colors.CLR_PERFECT_DARK,
    },
  });
};
