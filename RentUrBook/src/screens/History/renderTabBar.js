import React from "react";
import { TabBar } from "react-native-tab-view";
import { tabBarStyles } from './styles';

export const renderTabBar = (props) => (
    <TabBar
        {...props}
        scrollEnabled={false}
        indicatorContainerStyle={tabBarStyles.tabBarIndicatorContainer}
        indicatorStyle={tabBarStyles.tabBarIndicator}
        labelStyle={tabBarStyles.tabBarLabel}
        style={tabBarStyles.tabBar}
    />
);