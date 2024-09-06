import React, { FC } from "react";
import { View, Text } from "react-native";

// Styles
import styles from "./CurrentWeather.Style";

// Icons
import SvgPartlyCloudyWeather from "../icons/PartlyCloudyWeather";

interface CurrentWeatherProps {
  icon?: JSX.Element;
  weather: string;
  temperature: number;
  highTemperature: number;
  lowTemperature: number;
  isSmall?: boolean;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  icon,
  weather,
  temperature,
  highTemperature,
  lowTemperature,
  isSmall = false,
}) => {
  const iconWidth = isSmall ? 135 / 2.5 : 135;
  const iconHeight = isSmall ? 130 / 2.5 : 130;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {icon ?? (
          <SvgPartlyCloudyWeather width={iconWidth} height={iconHeight} />
        )}
        <Text
          style={[
            styles.temperature,
            isSmall && {
              fontSize: 48,
            },
          ]}
        >
          {temperature}
        </Text>
        <Text
          style={[
            styles.degree,
            isSmall && {
              fontSize: 36,
            },
          ]}
        >
          °
        </Text>
      </View>
      {!isSmall && (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{weather}</Text>
          <Text style={styles.footerText}>-</Text>
          <Text style={styles.footerText}>H:{highTemperature}°</Text>
          <Text style={styles.footerText}>L:{lowTemperature}°</Text>
        </View>
      )}
    </View>
  );
};

export default CurrentWeather;
