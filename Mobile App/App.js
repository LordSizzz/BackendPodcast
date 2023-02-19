import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Sound from "react-native-sound";
import Comment_item from "./src/components/Comment_item";
import Custom_button from "./src/components/Custom_button";
import Login from "./src/pages/Login";
import Personal from "./src/pages/Personal";
import Podcast from "./src/pages/Podcast";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            width: "50%",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            position: "absolute",
            backgroundColor: "#1F1F1D",
            elevation: 30,
            marginLeft: "20%",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color, size, navigation }) => {
            let iconName;
            if (route.name === "podcast") {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("./assets/icons/sound.png")}
                />
              );
            } else if (route.name === "personal") {
              return (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("./assets/icons/person_white.png")}
                />
              );
            }
          },
        })}
      >
        <Tab.Screen name="personal" component={Personal} />
        <Tab.Screen name="podcast" component={Podcast} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D1D",
  },
});
