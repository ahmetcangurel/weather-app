import React from "react";
import { View } from "react-native";

// Components
import CurvedLine from "../CurvedLine";

const OpenCaseContent = () => {
  return (
    <View>
      <CurvedLine
        percentage={30}
        sunriseTime="06:04 AM"
        sunsetTime="05:51 PM"
      />
    </View>
  );
};

export default OpenCaseContent;
