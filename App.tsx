import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Screens
import HomeScreen from "./src/Screens/HomeScreen";

const App = () => {
  const [loaded, error] = useFonts({
    "CircularStd-Black": require("./assets/fonts/CircularStd-Black.ttf"),
    "CircularStd-Bold": require("./assets/fonts/CircularStd-Bold.ttf"),
    "CircularStd-Book": require("./assets/fonts/CircularStd-Book.ttf"),
    "CircularStd-Light": require("./assets/fonts/CircularStd-Light.otf"),
    "CircularStd-Medium": require("./assets/fonts/CircularStd-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return <HomeScreen />;
};

export default App;
