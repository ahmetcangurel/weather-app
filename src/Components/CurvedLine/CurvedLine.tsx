import React from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import type { SvgProps } from "react-native-svg";

// Styles
import styles from "./CurvedLine.Style";

// Components
import SvgSunFogLight from "../icons/SunFogLight";

interface CurvedLineProps extends SvgProps {
  percentage: number;
  sunsetTime: string;
  sunriseTime: string;
}

const CurvedLine = (
  { percentage, sunsetTime, sunriseTime }: CurvedLineProps,
  props: SvgProps
) => {
  // Çizgi için yol verisi
  const getPath = () => {
    const startX = 0;
    const startY = 100;
    const controlX = 150;
    const controlY = -50; // Ortadaki yumuşak eğrinin yüksekliği
    const endX = 300;
    const endY = 100;
    return `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
  };

  // Yüzdelik dilime göre ikonun pozisyonunu hesapla
  const getIconPosition = () => {
    const startX = 0;
    const startY = 100;
    const controlX = 150;
    const controlY = -50;
    const endX = 300;
    const endY = 100;

    // Basit bir yaklaşım: Yüzdelik dilimi başlangıç ve bitiş arasında lineer bir şekilde hesaplıyoruz
    const t = percentage / 100;

    // Bezier eğrisinde noktayı bulma
    const x =
      (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
    const y =
      (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

    return { x, y };
  };

  const iconPosition = getIconPosition();

  return (
    <View>
      <Svg
        height="110"
        width={Dimensions.get("window").width}
        style={{}}
        viewBox="0 0 300 110"
        {...props}
      >
        {/* Gradyan tanımlama */}
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="rgba(151,171,255,.5)" />
            <Stop offset="50%" stopColor="white" />
            <Stop offset="100%" stopColor="rgba(151,171,255,1)" />
          </LinearGradient>
          <LinearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#F90" />
            <Stop offset="100%" stopColor="#FFEE94" />
          </LinearGradient>
        </Defs>

        {/* Eğrili çizgi */}
        <Path
          d={getPath()}
          stroke="url(#gradient)" // Gradyan uygulaması
          strokeWidth="3"
          fill="none"
        />

        {/* Blur ile ışık efekti */}
        <Circle
          cx={iconPosition.x}
          cy={iconPosition.y}
          r="14"
          fill="url(#blueGradient)"
          opacity="0.3" // Işığın saydamlığı
        />

        {/* Yüzdelik dilime göre yerleşen ikon */}
        <Circle
          cx={iconPosition.x}
          cy={iconPosition.y}
          r="10"
          fill="url(#blueGradient)" // Gradyan mavi
        />
      </Svg>
      <View style={styles.container}>
        <View style={styles.section}>
          <SvgSunFogLight width={30} height={30} />
          <Text style={styles.text}>{sunriseTime}</Text>
          <Text style={styles.text}>Sunrise</Text>
        </View>
        <View style={styles.section}>
          <SvgSunFogLight width={30} height={30} />
          <Text style={styles.text}>{sunsetTime}</Text>
          <Text style={styles.text}>Sunset</Text>
        </View>
      </View>
    </View>
  );
};

export default CurvedLine;
