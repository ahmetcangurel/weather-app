import React from "react";
import { View, Text, FlatList } from "react-native";

// Styles
import styles from "./WeatherItemList.Style";

// Components
import WeatherItem from "../WeatherItem";

// Types
import { IconType } from "../../types";

interface WeatherItemListProps {
  list: {
    title: string;
    icon: IconType;
    temperature: number;
    isActive: boolean;
  }[];
}

const WeatherItemList = ({ list }: WeatherItemListProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={list}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <WeatherItem
          title={item.title}
          icon={item.icon}
          temperature={item.temperature}
          isActive={item.isActive}
        />
      )}
    />
  );
};

export default WeatherItemList;
