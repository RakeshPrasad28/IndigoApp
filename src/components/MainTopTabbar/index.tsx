import { RootState } from "@redux/store";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "@utils/Colors";
import { useSelector } from "react-redux";
import { styles } from "./styles";


const MainTopTabBar = ({ state, descriptors, navigation }: any) => {
  const Styles = styles();
  const {data, isLoading, isError} = useSelector(
    (state: RootState) => state.pendingDataReducer,
  );

  const updatePendingData =
    data && data.length > 0
      ? data.reduce((acc: any[], data: any) => {
          if (
            (data.trainingStatus === "P" || data.approveStatus === "P") &&
            data.pass_fail === "F" &&
            data.feedbackFlag !== "completed"
          ) {
            acc.push({ isBoth: "Feedback", ...data });
            acc.push({ isBoth: "Review", ...data });
          } else if (
            data.trainingStatus === "P" ||
            data.approveStatus === "P"
          ) {
            acc.push({ isBoth: "Review", ...data });
          } else if (
            data.pass_fail === "F" ||
            data.feedbackFlag !== "completed"
          ) {
            acc.push({ isBoth: "Feedback", ...data });
          }
          return acc;
        }, [])
      : [];
  return (
    <View style={Styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={[
              {
                backgroundColor: isFocused ? Colors.CLR_WHITE : Colors.CLR_SKY,
                borderBottomWidth: isFocused
                  ? 3
                  : index === 1 && data.length > 0
                  ? 3
                  : 0,
                borderBottomColor:
                  data.length > 0 && index === 1
                    ? Colors.CLR_GOLDEN_YELLOW
                    : isFocused
                    ? Colors.CLR_PERFECT_DARK
                    : "",
              },
              Styles.singleTabView,
            ]}
          >
            <Text style={Styles.textStyle}>
              {label}
              {index === 1 && <Text> ({updatePendingData.length})</Text>}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTopTabBar;
