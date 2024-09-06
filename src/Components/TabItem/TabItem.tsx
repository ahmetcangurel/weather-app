import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

// Styles
import styles from "./TabItem.Style";

interface TabItemProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const TabItem: FC<TabItemProps> = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, isActive && styles.itemContainerActive]}
      activeOpacity={0.9}
    >
      <Text style={styles.item}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
