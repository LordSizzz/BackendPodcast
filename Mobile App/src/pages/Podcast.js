import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Simple_page_title from "../components/Simple_page_title";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Play from "./Play";

export default function Podcast() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Play} name="play" />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
