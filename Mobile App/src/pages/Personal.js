import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Add_podcast from "./Add_podcast";
import Home from "./Home";
import Play from "./Play";
import Podcast from "./Podcast";

export default function Personal() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="addpodcast" component={Add_podcast} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="play" component={Play} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
