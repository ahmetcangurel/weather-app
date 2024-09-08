import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import MapView from "react-native-maps";

// Components
import CurvedLine from "../CurvedLine";
import SummaryContent from "../SummaryContent";

const OpenCaseContent = () => {
  return (
    <ScrollView style={{ flex: 1, paddingBottom: 50 }}>
      <CurvedLine
        percentage={30}
        sunriseTime="06:04 AM"
        sunsetTime="05:51 PM"
      />

      <SummaryContent />

      <MapView
        style={{
          width: "94%",
          height: 200,
          borderRadius: 20,
          alignSelf: "center",
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  );
};

export default OpenCaseContent;
