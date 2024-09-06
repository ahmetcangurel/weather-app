import React, { FC } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Styles
import styles from "./WeatherItem.Style";

// Types
import { IconType } from "../../types";

// Icons
import SvgLightningSunWeather from "../icons/LightningSunWeather";
import SvgLightningWeather from "../icons/LightningWeather";
import SvgPartlyCloudyWeather from "../icons/PartlyCloudyWeather";
import SvgRainyWeather from "../icons/RainyWeather";
import SvgSunnyWeather from "../icons/SunnyWeather";

interface WeatherItemProps {
  title: string;
  icon: IconType;
  temperature: number;
  isActive?: boolean;
}

const WeatherItem: FC<WeatherItemProps> = ({
  title,
  icon,
  temperature,
  isActive,
}) => {
  const ICON_SIZE = 48;

  const iconSelector = (icon: string) => {
    switch (icon) {
      case "sunny":
        return <SvgSunnyWeather width={ICON_SIZE} height={ICON_SIZE} />;
      case "partly-cloudy":
        return <SvgPartlyCloudyWeather width={ICON_SIZE} height={ICON_SIZE} />;
      case "rainy":
        return <SvgRainyWeather width={ICON_SIZE} height={ICON_SIZE} />;
      case "lightning":
        return <SvgLightningWeather width={ICON_SIZE} height={ICON_SIZE} />;
      case "lightning-sun":
        return <SvgLightningSunWeather width={ICON_SIZE} height={ICON_SIZE} />;
      default:
        return <SvgSunnyWeather width={ICON_SIZE} height={ICON_SIZE} />;
    }
  };

  return (
    <View>
      <LinearGradient
        colors={["rgba(255,255,255,.1)", "transparent"]}
        start={[1, 1]}
        end={[1, 1]}
        style={{
          padding: 2,
          borderRadius: 100,
        }}
      >
        <LinearGradient
          colors={["rgba(255,255,255,.3)", "transparent"]}
          start={[0, 0.4]}
          end={[1, 1]}
          style={styles.container}
        >
          <Text style={styles.text}>{title}</Text>
          {iconSelector(icon)}
          <Text style={styles.text}>{temperature}°</Text>
        </LinearGradient>
      </LinearGradient>
      <View
        style={[
          styles.activeIndicatorContainer,
          { backgroundColor: isActive ? "white" : "transparent" },
        ]}
      />
    </View>
  );
};

export default WeatherItem;
