import React, { useEffect, useState } from "react";
import {
  Animated,
  useWindowDimensions,
} from "react-native";
import {  TabNavigation } from "./TabNavigation";
import { useDispatch, useSelector } from "react-redux";
import Header from "@components/Header";


const FormTabScreen = () => {
  const dispatch = useDispatch();
  return (
    <Animated.View style={{flex:1}}>
      {/* <Header hideDrawerNavigationIconButton={true} /> */}

      {/* MATERIAL TOP TAB CONTENT */}
      <Header hideHamburgerIcon={true}/>
      <TabNavigation />
      {/* {showSubmissionLoader && (
        <View style={styles.loaderOverlay}>
          <Loader />
        </View>
      )} */}
      {/* </Animated.View> */}
    </Animated.View>
  );
};

export default FormTabScreen;
