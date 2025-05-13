import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calender from '@screens/DrawerScreens/Calender';
import {MainTabNavigation} from './MainTabNavigation';
import Header from '@components/Header';
import {screenHeight, screenWidth} from '@utils/Scaling';
import SCREEN_NAMES from '@utils/screenNames';
import {TabNavigation} from './TabNavigation';
import FormTabScreen from './FormTabScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const topOffset = screenHeight * 0.04;

  return (
    <Drawer.Navigator
      initialRouteName={SCREEN_NAMES.CALENDAR_SCREEN}
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: 'rgb(2, 123, 255)',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerLabelStyle: {fontSize: 16},
        drawerContentContainerStyle: {
          backgroundColor: 'rgb(36, 34, 98)',
          flex: 1,
        },
        swipeEnabled: false,
        drawerStyle: {
          top: topOffset,
          width: screenWidth * 0.35,
        },
        header: () => <Header />,
      }}>
      <Drawer.Screen name={SCREEN_NAMES.CALENDAR_SCREEN} component={Calender} />
      <Drawer.Screen
        name={SCREEN_NAMES.ASSESSMENT_SCREEN}
        component={MainTabNavigation}
      />
      <Drawer.Screen
        name={SCREEN_NAMES.FORMS_TAB_SCREEN}
        component={FormTabScreen}
        options={{drawerItemStyle: {display: 'none'}, headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
