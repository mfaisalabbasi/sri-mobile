import React from 'react';
import { Ionicons, Entypo, EvilIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Infographics from '../screens/Infographics';
import InfoDetails from '../screens/InfoDetails';
import Videos from '../screens/Videos';
import Detail from '../screens/Detail';
import VidDetails from '../screens/VidDetails';
import About from '../screens/About';
import Team from '../screens/Team';
import AddArticle from '../admin/AddArticle';
import UploadInfo from '../admin/UploadInfo';
import AddBroad from '../admin/AddBroad';

//Stack Navigator For Articles
const Stack = createStackNavigator();
const stackArticle = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Latest Articles'
        }}
      />
      <Stack.Screen
        name='details'
        component={Detail}
        options={{
          title: 'Details'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='Videos'
        component={Videos}
        options={{
          title: 'Videos'
        }}
      />
      <Stack.Screen
        name='vidDetails'
        component={VidDetails}
        options={{
          title: 'Watch Videos'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='add article'
        component={AddArticle}
        options={{
          title: 'Add Articles'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='uploadinfo'
        component={UploadInfo}
        options={{
          title: 'Upload Infographics'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='uploadinfo'
        component={AddBroad}
        options={{
          title: 'Add Broadcast'
        }}
      />
    </Stack.Navigator>
  );
};
//Stack Navigator For Team

const stackTeam = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='team'
        component={Team}
        options={{
          title: 'Our Team'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={{
          title: ' About Us'
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
          backgroundColor: '#00344D'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name='Infographics'
        component={Infographics}
        options={{
          title: 'Infographics Reports '
        }}
      />
      <Stack.Screen
        name='infoDetails'
        component={InfoDetails}
        options={{
          title: 'Infographics Details'
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
        activeBackgroundColor: '#0C5172',
        inactiveBackgroundColor: '#00344D',
        inactiveTintColor: 'white',
        activeTintColor: 'white'
      }}
    >
      <Tab.Screen
        name='Article'
        component={stackArticle}
        options={{
          tabBarIcon: tab => (
            <Ionicons name='ios-book' size={27} color='white' />
          )
        }}
      />
      <Tab.Screen
        name='Infographics'
        component={stackInfo}
        options={{
          tabBarIcon: tab => <Entypo name='bar-graph' size={25} color='white' />
        }}
      />
      <Tab.Screen
        name='Videos'
        component={stackVideos}
        options={{
          tabBarIcon: tab => (
            <Ionicons name='ios-videocam' size={30} color='white' />
          )
        }}
      />
    </Tab.Navigator>
  );
};

//Drawer Navigation Section
const Draw = createDrawerNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator
        drawerStyle={{
          backgroundColor: '#00344D'
        }}
        drawerContentOptions={{
          inactiveTintColor: 'white',
          activeTintColor: 'white'
        }}
      >
        <Draw.Screen
          name='  Home'
          component={tabNavigation}
          options={{
            drawerIcon: draw => {
              return <Ionicons name='ios-home' size={27} color='white' />;
            }
          }}
        />

        <Draw.Screen
          name='Upload infographics'
          component={stackUpload}
          options={{
            drawerIcon: draw => {
              return (
                <Ionicons name='md-cloud-upload' size={27} color='white' />
              );
            }
          }}
        />
        <Draw.Screen
          name='Add Videos'
          component={stackAddBroad}
          options={{
            drawerIcon: draw => {
              return <Ionicons name='ios-videocam' size={27} color='white' />;
            }
          }}
        />

        <Draw.Screen
          name='Our Team'
          component={stackTeam}
          options={{
            drawerIcon: draw => {
              return <Ionicons name='ios-people' size={27} color='white' />;
            }
          }}
        />
        <Draw.Screen
          name='Add Article'
          component={stackAddarticle}
          options={{
            drawerIcon: draw => {
              return <EvilIcons name='pencil' size={27} color='white' />;
            }
          }}
        />
        <Draw.Screen
          name='About Us'
          component={stackAbout}
          options={{
            drawerIcon: draw => {
              return (
                <Ionicons
                  name='ios-information-circle-outline'
                  size={27}
                  color='white'
                />
              );
            }
          }}
        />
      </Draw.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
