import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Styles
import styles from "./HomeScreen.Style";

// Types
import { IconType } from "../../types";

// Components
import SvgLocation from "../../Components/icons/Location";
import CurrentWeather from "../../Components/CurrentWeather";
import ModalView from "../../Components/ModalView";
import WeatherItemList from "../../Components/WeatherItemList";
import {
  CloseCaseContent,
  OpenCaseContent,
} from "../../Components/BottomSheetContents";
import TabList from "../../Components/TabList";

const HomeScreen = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Daily");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentOpacity = useRef(new Animated.Value(1)).current;

  const weatherList: {
    title: string;
    icon: IconType;
    temperature: number;
    isActive: boolean;
  }[] = [
    { title: "Now", icon: "sunny", temperature: 13, isActive: true },
    { title: "12:00", icon: "partly-cloudy", temperature: 15, isActive: false },
    { title: "13:00", icon: "rainy", temperature: 14, isActive: false },
    { title: "14:00", icon: "lightning", temperature: 13, isActive: false },
    { title: "15:00", icon: "lightning-sun", temperature: 14, isActive: false },
  ];

  const handleOpenBottomSheet = useCallback(() => {
    if (isOpen) {
      Animated.timing(contentOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }
  }, [isOpen]);

  useEffect(() => {
    handleOpenBottomSheet();
  }, [isOpen]);

  const handleRefreshScreen = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 2000);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(151,171,255,1)", "rgba(18,53,151,1)"]}
        start={[0, 0.4]}
        end={[1, 1]}
        style={styles.container}
      >
        <SafeAreaView style={styles.contentContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => handleRefreshScreen()}
                tintColor="white"
              />
            }
            style={styles.container}
          >
            {/* Header - Location - START */}
            <View
              style={[
                styles.headerContainer,
                isOpen && {
                  flexDirection: "row",
                },
              ]}
            >
              {/* Title Container */}
              <View style={styles.headerTitleContainer}>
                <Text style={styles.cityText}>San Diego</Text>
                <View style={styles.locationContainer}>
                  <SvgLocation width={20} height={20} />
                  <Text style={styles.currentLocationText}>
                    Current Location
                  </Text>
                </View>
              </View>
              {/* Current Weather Small */}
              {isOpen && (
                <CurrentWeather
                  weather="Partly Cloudy"
                  temperature={13}
                  highTemperature={17}
                  lowTemperature={4}
                  isSmall
                />
              )}
            </View>
            {/* Header - Location - END */}

            <Animated.View
              style={{
                opacity: contentOpacity,
              }}
            >
              {/* Weather - START */}
              <CurrentWeather
                weather="Partly Cloudy"
                temperature={13}
                highTemperature={17}
                lowTemperature={4}
              />
              {/* Weather - END */}

              {/* Tab - START */}
              <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
              {/* Tab - END */}

              {/* Weather Items - START */}
              <WeatherItemList list={weatherList} />
              {/* Weather Items - END */}
            </Animated.View>
          </ScrollView>

          {/* Bottom Sheet - START */}
          <ModalView isOpen={isOpen} setIsOpen={setIsOpen}>
            {isOpen ? <OpenCaseContent /> : <CloseCaseContent />}
          </ModalView>
          {/* Bottom Sheet - END */}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
