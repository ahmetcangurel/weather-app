import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList,
  Dimensions,
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
import TabItem from "../../Components/TabItem";
import WeatherItem from "../../Components/WeatherItem";
import ModalView from "../../Components/ModalView";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import SvgArrowUp from "../../Components/icons/ArrowUp";
import SvgArrowDown from "../../Components/icons/ArrowDown";
import WeatherInfoItem from "../../Components/WeatherInfoItem";
import CurvedLine from "../../Components/CurvedLine";

const HomeScreen = () => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Daily");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentOpacity = useRef(new Animated.Value(1)).current;

  const tabs: string[] = ["Daily", "Weekly"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

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
              <View style={styles.tabContainer}>
                {tabs.map((tab, index) => (
                  <TabItem
                    key={index}
                    title={tab}
                    isActive={activeTab === tab}
                    onPress={() => handleTabChange(tab)}
                  />
                ))}
              </View>
              {/* Tab - END */}

              {/* Weather Items - START */}
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.weatherItemsContainer}
                data={weatherList}
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
              {/* Weather Items - END */}
            </Animated.View>
          </ScrollView>

          {/* Bottom Sheet - START */}
          <ModalView isOpen={isOpen} setIsOpen={setIsOpen}>
            {isOpen ? (
              <View>
                <CurvedLine
                  percentage={30}
                  sunriseTime="06:04 AM"
                  sunsetTime="05:51 PM"
                />
              </View>
            ) : (
              <>
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
              </>
            )}
          </ModalView>
          {/* Bottom Sheet - END */}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
