import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import Colors from '@utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LessonPlanContainer: FC<{
  top: number;
  right: number;
  setModalVisible: (value: boolean) => void;
}> = ({top, right, setModalVisible}) => {
  const theme = useSelector((state: RootState) => state.theme);
  const rowData = useSelector((state: RootState) => state.rowData.rowData);
  return (
    <View
      style={{
        paddingVertical: rowData.template_id === 66 ? 8 : 15,
        paddingHorizontal: 8,
        position: 'absolute',
        top: top,
        right: right,
        flexDirection: 'row',
        backgroundColor:
          theme.mode === 'dark' ? Colors.CLR_BLACK : Colors.CLR_MIDNIGHT,
        borderRadius: 5,
        zIndex: 10,
        gap: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
      }}>
      {rowData?.template_id === 66 ? (
        <>
          <Pressable onPress={() => {}}>
            <View style={{alignItems: 'center', marginVertical: 1}}>
              <AntDesign
                name="infocirlce"
                size={22}
                color="white"
                style={{fontWeight: 'bold'}}
              />
              <Text style={{color: 'white', fontSize: 14}}>Instructions</Text>
            </View>
          </Pressable>
          <Text style={{color: '#fff', fontSize: 20, marginTop: -8}}>
            {rowData.lessonDesc}
          </Text>
        </>
      ) : (
        <>
          <Pressable onPress={() => {}}>
            <AntDesign
              name="infocirlce"
              size={20}
              color="white"
              style={{fontWeight: 'bold'}}
            />
          </Pressable>
          <Text style={{color: '#fff', fontSize: 20}}>
            {rowData.lessonDesc}
          </Text>
        </>
      )}
    </View>
  );
};

export default LessonPlanContainer;
