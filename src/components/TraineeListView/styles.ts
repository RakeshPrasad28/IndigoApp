import Colors from '@utils/Colors';
import Fonts from '@utils/Fonts';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export const styles = () => {
  const theme = useSelector((state: any) => state.theme);

  return StyleSheet.create({
    tableBodyRow: {
      backgroundColor:
        theme.mode === 'dark' ? Colors.CLR_SQUANT : Colors.CLR_NORTHBLUE,
      marginVertical: 1,
      paddingVertical: 3,
    },
    tableBodyCellText: {
      fontSize: 15,
      color: Colors.CLR_WHITE,
      textAlign: 'left',
      fontFamily: Fonts.OpenSansRegular,
      padding: 5,
      paddingHorizontal: 8,
    },
    tableHeaderContainer: {
        backgroundColor: theme.mode === 'dark'
          ? Colors.CLR_DARK_CHARCOAL
          : Colors.CLR_GALACTIC,
        padding: 10,
        marginBottom: 1,
      },
      tableHeaderContainerText: {
        fontSize: 17,
        color: Colors.CLR_WHITE,
        textAlign: "left",
        fontFamily: Fonts.OpenSansRegular,
      },
  });
};
