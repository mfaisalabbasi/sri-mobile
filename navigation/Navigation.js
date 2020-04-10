import React, { useState, useEffect } from "react";
import { Ionicons, Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Home from "../screens/Home";
import Infographics from "../screens/Infographics";
import Videos from "../screens/Videos";
import Detail from "../screens/Detail";
import About from "../screens/About";
import AddArticle from "../admin/AddArticle";
import UploadInfo from "../admin/UploadInfo";
import AddBroad from "../admin/AddBroad";
import { View, StyleSheet, Image, AsyncStorage } from "react-native";
import Admin from "../screens/Admin";
import Infocat from "../screens/Infocat";
import Defence from "../screens/categories/Defence";
import Economy from "../screens/categories/Economy";
import Education from "../screens/categories/Education";
import Health from "../screens/categories/Health";
import Military from "../screens/categories/Military";
import Nuclear from "../screens/categories/Nuclear";
import Single from "../components/Single";

//Stack Navigator For Articles
const Stack = createStackNavigator();
const stackArticle = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Articles",
        }}
      />
      <Stack.Screen
        name='details'
        component={Detail}
        options={{
          title: "Details",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Videos

const stackVideos = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='Videos'
        component={Videos}
        options={{
          title: "Videos",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Add Article

const stackAddarticle = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='article'
        component={AddArticle}
        options={{
          title: "Add Articles",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Add Article

const stackUpload = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='uploadinfo'
        component={UploadInfo}
        options={{
          title: "Upload Infographics",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Add Broad

const stackAddBroad = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='uploadinfo'
        component={AddBroad}
        options={{
          title: "Add Broadcast",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For About

const stackAbout = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={{
          title: " About Us",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Infographics

const stackInfo = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='Infographics'
        component={Infographics}
        options={{
          title: "Infographics ",
        }}
      />
      <Stack.Screen
        name='categories'
        component={Infocat}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name='single'
        component={Single}
        options={{
          title: "Download",
        }}
      />
      {/* cat */}
      <Stack.Screen
        name='defence'
        component={Defence}
        options={{
          title: "Defence",
        }}
      />
      <Stack.Screen
        name='economy'
        component={Economy}
        options={{
          title: "Economy",
        }}
      />
      <Stack.Screen
        name='education'
        component={Education}
        options={{
          title: "Education",
        }}
      />
      <Stack.Screen
        name='health'
        component={Health}
        options={{
          title: "Health",
        }}
      />
      <Stack.Screen
        name='military'
        component={Military}
        options={{
          title: "Military",
        }}
      />
      <Stack.Screen
        name='nuclear'
        component={Nuclear}
        options={{
          title: "Nuclear",
        }}
      />
    </Stack.Navigator>
  );
};

//Stack Navigator For Admin

const adminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00344D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name='Adminstration'
        component={Admin}
        options={{
          title: "Adminstrations ",
        }}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator Section
const Tab = createBottomTabNavigator();
const tabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Infographics'
      tabBarOptions={{
        activeBackgroundColor: "#0C5172",
        inactiveBackgroundColor: "#00344D",
        inactiveTintColor: "white",
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name='Articles'
        component={stackArticle}
        options={{
          tabBarIcon: (tab) => (
            <Ionicons name='ios-book' size={30} color='white' />
          ),
        }}
      />
      <Tab.Screen
        name='Infographics'
        component={stackInfo}
        options={{
          tabBarIcon: (tab) => (
            <Entypo name='bar-graph' size={25} color='white' />
          ),
        }}
      />
      <Tab.Screen
        name='Videos'
        component={stackVideos}
        options={{
          tabBarIcon: (tab) => (
            <Ionicons name='ios-videocam' size={30} color='white' />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logo}>
        <View style={styles.imgSec}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

//Drawer Navigation Section
const Draw = createDrawerNavigator();
const Navigation = () => {
  const [state, setstate] = useState(false);
  const fethchToken = async () => {
    const token = await AsyncStorage.getItem("token");
    await AsyncStorage.removeItem("token");

    if (token) {
      setstate(true);
    }
  };
  useEffect(() => {
    fethchToken();
  }, [fethchToken]);
  return (
    <NavigationContainer>
      {!state ? (
        <Draw.Navigator
          drawerStyle={{
            backgroundColor: "#00344D",
          }}
          drawerContentOptions={{
            inactiveTintColor: "white",
            activeTintColor: "white",
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Draw.Screen
            name='  Home'
            component={tabNavigation}
            options={{
              drawerIcon: (draw) => {
                return <Ionicons name='ios-home' size={30} color='white' />;
              },
            }}
          />

          <Draw.Screen
            name='Adminstration'
            component={adminStack}
            options={{
              drawerIcon: (draw) => {
                return (
                  <FontAwesome name='user-secret' size={28} color='white' />
                );
              },
            }}
          />
          <Draw.Screen
            name='About Us'
            component={stackAbout}
            options={{
              drawerIcon: (draw) => {
                return (
                  <Ionicons
                    name='ios-information-circle-outline'
                    size={30}
                    color='white'
                  />
                );
              },
            }}
          />
        </Draw.Navigator>
      ) : (
        <Draw.Navigator
          drawerStyle={{
            backgroundColor: "#00344D",
          }}
          drawerContentOptions={{
            inactiveTintColor: "white",
            activeTintColor: "white",
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Draw.Screen
            name='  Home'
            component={tabNavigation}
            options={{
              drawerIcon: (draw) => {
                return <Ionicons name='ios-home' size={30} color='white' />;
              },
            }}
          />
          <Draw.Screen
            name='Upload infographics'
            component={stackUpload}
            options={{
              drawerIcon: (draw) => {
                return (
                  <Ionicons name='md-cloud-upload' size={30} color='white' />
                );
              },
            }}
          />
          <Draw.Screen
            name='Add Videos'
            component={stackAddBroad}
            options={{
              drawerIcon: (draw) => {
                return <Ionicons name='ios-videocam' size={30} color='white' />;
              },
            }}
          />
          <Draw.Screen
            name=' Add Article'
            component={stackAddarticle}
            options={{
              drawerIcon: (draw) => {
                return (
                  <Foundation name='clipboard-pencil' size={30} color='white' />
                );
              },
            }}
          />
        </Draw.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 220,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imgSec: {
    width: "85%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
  },
});
export default Navigation;
