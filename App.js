import React, { useState } from "react";
import Navigation from "./navigation/Navigation";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    ebrima: require("./assets/fonts/ebrima.ttf"),
  });
};
const App = () => {
  const [loadfonts, setloadfonts] = useState(false);
  if (!loadfonts) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setloadfonts(true)}
        onError={(err) => console.log(error)}
      />
    );
  }
  return <Navigation />;
};
export default App;
