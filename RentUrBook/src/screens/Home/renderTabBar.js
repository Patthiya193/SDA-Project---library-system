import React from "react";
import { TabBar } from "react-native-tab-view";
import { styles } from './styles';

export const renderTabBar = (props) => (
    <TabBar
        {...props}
        scrollEnabled={true}
        indicatorContainerStyle={styles.tabBarIndicatorContainer}
        indicatorStyle={styles.tabBarIndicator}
        labelStyle={styles.tabBarLabel}
        tabStyle={styles.tabBarStyle}
        style={styles.tabBar}
    />
);