import { View, Text } from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";

// Styles
import styles from "./WeatherInfoItem.Style";

// Components
import SvgSunFogLight from "../icons/SunFogLight";
import SvgSunLight from "../icons/SunLight";

interface WeatherInfoItemProps {
  icon: "sunny" | "sunset";
  sectionData: {
    title: string;
    subtitle: string;
  }[];
}

const WeatherInfoItem: FC<WeatherInfoItemProps> = ({ icon, sectionData }) => {
  const RenderSection = ({
    data,
  }: {
    data: { title: string; subtitle: string };
  }) => {
    return (
      <View style={styles.section}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {data?.subtitle}
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["rgba(255,255,255,.2)", "rgba(255,255,255,.01)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.container}
    >
      {icon == "sunset" ? (
        <SvgSunFogLight width={64} height={64} />
      ) : (
        <SvgSunLight width={64} height={64} />
      )}
      {sectionData?.map((data, index) => (
        <RenderSection key={index} data={data} />
      ))}
    </LinearGradient>
  );
};

export default WeatherInfoItem;
