import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import WeatherInfoItem from "../WeatherInfoItem";

const CloseCaseContent = () => {
  return (
    <View style={styles.container}>
      <WeatherInfoItem
        icon="sunset"
        sectionData={[
          {
            title: "Sunset",
            subtitle: "5:51 PM",
          },
          {
            title: "Sunsire",
            subtitle: "7:00 AM",
          },
        ]}
      />
      <WeatherInfoItem
        icon="sunny"
        sectionData={[
          {
            title: "UV Index",
            subtitle: "1 Low",
          },
        ]}
      />
    </View>
  );
};

export default CloseCaseContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
