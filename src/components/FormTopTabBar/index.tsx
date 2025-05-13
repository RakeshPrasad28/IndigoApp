import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import SCREEN_NAMES from '@utils/screenNames';
import Colors from '@utils/Colors';
import {navigate} from '@utils/NavigationUtils';
import {styles} from './styles';
import Header from '@components/Header';

export interface tabBarProps {
  route: {key: string | number; name: string; params: any};
  index: React.Key | null | undefined;
}

const FormTopTabBar = ({state, descriptors, navigation}: any) => {
  const dispatch = useDispatch();

  const Styles = styles();

  return (
    <Animated.View style={Styles.container}>
      {/* <Header hideHamburgerIcon={true}/> */}
      {state.routes.map(
        (route: tabBarProps['route'], index: tabBarProps['index']) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              if (route.name === SCREEN_NAMES.GRADING_TAB_HOME) {
                Alert.alert(
                  'iGrade_Indigo',
                  'Are you sure you want to go back?',
                  [
                    {
                      text: 'No',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        navigate(SCREEN_NAMES.ASSESSMENT_SCREEN);
                      },
                    },
                  ],
                );
              } else {
                navigation.navigate(route.name, route.params);
              }
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const tabIcon = () => {
            let iconName;
            switch (label) {
              case SCREEN_NAMES.GRADING_TAB_HOME:
                iconName = 'home';
                break;
              case SCREEN_NAMES.FORM_GRADING_TAB:
                iconName = 'create-outline';
                break;
              case SCREEN_NAMES.FORM_OVERALL_OUTCOME:
                iconName = 'menu-outline';
                break;
              case SCREEN_NAMES.FORM_GRADING_COMPLETE:
                iconName = 'arrow-up-circle';
                break;
              case SCREEN_NAMES.FORM_HISTORY:
                iconName = 'eye';
                break;

              default:
                break;
            }
            return (
              <Ionicons
                name={iconName || ''}
                color={isFocused ? 'black' : 'white'}
                size={25}
                style={{marginLeft: 4}}
              />
            );
          };
          const theme = useSelector((state: RootState) => state.theme);
          return (
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={1}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}
              style={[
                {
                  backgroundColor: isFocused
                    ? Colors.CLR_WHITE
                    : theme.mode === 'dark'
                    ? Colors.CLR_PICHOLINE
                    : Colors.CLR_BLUE_HUE,
                  borderBottomWidth: isFocused ? 3 : 0,
                  borderBottomColor: isFocused ? Colors.CLR_PERFECT_DARK : '',
                },
                Styles.singleTabView,
              ]}>
              <Text
                style={[
                  Styles.textStyle,
                  {
                    color: isFocused
                      ? Colors.CLR_PERFECT_DARK
                      : Colors.CLR_WHITE,
                  },
                ]}>
                {label === SCREEN_NAMES.GRADING_TAB_HOME ? '' : label}
              </Text>
              {tabIcon()}
            </TouchableOpacity>
          );
        },
      )}
    </Animated.View>
  );
};

export default FormTopTabBar;
