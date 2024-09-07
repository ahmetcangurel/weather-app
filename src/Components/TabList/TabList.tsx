import React, { useState } from "react";
import { View, Text } from "react-native";

// Styles
import styles from "./TabList.Style";

// Components
import TabItem from "../TabItem";

interface TabListProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabList = ({ activeTab, setActiveTab }: TabListProps) => {
  const tabs: string[] = ["Daily", "Weekly"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          title={tab}
          isActive={activeTab === tab}
          onPress={() => handleTabChange(tab)}
        />
      ))}
    </View>
  );
};

export default TabList;
