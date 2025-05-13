import MainTopTabBar from "@components/MainTopTabbar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Grading from "@screens/MainTabScreens/Grading";
import GradingHistory from "@screens/MainTabScreens/GradingHistory";
import PendingGrading from "@screens/MainTabScreens/PendingGrading";
import SLFHistory from "@screens/MainTabScreens/SLFHistory";
import SCREEN_NAMES from "@utils/screenNames";

const Tab = createMaterialTopTabNavigator();

export const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarPosition={"top"}
      screenOptions={{ swipeEnabled: false }}
      tabBar={(props: any) => <MainTopTabBar {...props} />}
    >
      <Tab.Screen name={SCREEN_NAMES.GRADING} component={Grading} />
      <Tab.Screen name={SCREEN_NAMES.PENDING_GRADING} component={PendingGrading} />
      <Tab.Screen name={SCREEN_NAMES.GRADING_HISTORY} component={GradingHistory} />
      <Tab.Screen name={SCREEN_NAMES.SLF_HISTORY} component={SLFHistory} />
    </Tab.Navigator>
  );
};