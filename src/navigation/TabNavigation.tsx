import FormTopTabBar from "@components/FormTopTabBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Grading from "@screens/MainTabScreens/Grading";
import FormGrading from "@screens/TabScreens/FormGrading";
import FormGradingComplete from "@screens/TabScreens/FormGradingComplete";
import FormHistory from "@screens/TabScreens/FormHistory";
import FormOverallOutcome from "@screens/TabScreens/FormOverallOutcome";
import SCREEN_NAMES from "@utils/screenNames";

const Tab = createMaterialTopTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarPosition={"top"}
      screenOptions={{ swipeEnabled: false }}
      tabBar={(props: any) => <FormTopTabBar {...props} />}
      initialRouteName={SCREEN_NAMES.FORM_GRADING_TAB}
    >
      <Tab.Screen name={SCREEN_NAMES.GRADING_TAB_HOME} component={Grading} />
      <Tab.Screen name={SCREEN_NAMES.FORM_GRADING_TAB} component={FormGrading} />
      <Tab.Screen name={SCREEN_NAMES.FORM_OVERALL_OUTCOME} component={FormOverallOutcome} />
      <Tab.Screen name={SCREEN_NAMES.FORM_GRADING_COMPLETE} component={FormGradingComplete} />
      <Tab.Screen name={SCREEN_NAMES.FORM_HISTORY} component={FormHistory} />
    </Tab.Navigator>
  );
};