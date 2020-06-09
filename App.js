import React, { useEffect } from "react";
import Navigation from "./navigation/Navigation";
import SplashScreen from "react-native-splash-screen";
import { View, StatusBar } from "react-native";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor='#011924' barStyle='light-content' />
      <Navigation />
    </View>
  );
};
export default App;
