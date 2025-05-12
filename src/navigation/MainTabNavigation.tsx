import TopTabBar from "@components/CustomTopTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Grading from "@screens/MainTabScreens/Grading";
import GradingHistory from "@screens/MainTabScreens/GradingHistory";
import PendingGrading from "@screens/MainTabScreens/PendingGrading";
import SLFHistory from "@screens/MainTabScreens/SLFHistory";

const Tab = createMaterialTopTabNavigator();

export const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarPosition={"top"}
      screenOptions={{ swipeEnabled: false }}
      tabBar={(props: any) => <TopTabBar {...props} />}
    >
      <Tab.Screen name="Grading" component={Grading} />
      <Tab.Screen name="Pending Grading" component={PendingGrading} />
      <Tab.Screen name="Grading History" component={GradingHistory} />
      <Tab.Screen name="SLF History" component={SLFHistory} />
    </Tab.Navigator>
  );
};