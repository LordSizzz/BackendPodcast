import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Underlined_page_title from "../components/Underlined_page_title";
import Simple_page_title from "../components/Simple_page_title";
import Custom_input from "../components/Custom_input";
import Custom_button from "../components/Custom_button";

export default function Login({ navigation }) {
  const [informations, setInformations] = useState({ email: "", password: "" });
  return (
    <View style={{ backgroundColor: "#1F1D1D", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 20,
          height: "100%",
        }}
      >
        <Underlined_page_title text={"Podcastini"} style={{ marginTop: 20 }} />
        <View
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Simple_page_title text={"Login"} style={{ marginBottom: 20 }} />
          <Custom_input
            label={"email"}
            icon={require("../../assets/icons/email.png")}
            placeholder={"Enter your Email..."}
            onChangeText={(text) => {
              setInformations({ ...informations, email: text });
            }}
          />
          <Custom_input
            label={"password"}
            icon={require("../../assets/icons/pass.png")}
            placeholder={"Enter your password..."}
            textContentType="password"
            onChangeText={(text) => {
              setInformations({ ...informations, password: text });
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Custom_button
              text={"Login"}
              onPress={() => {
                navigation.navigate("home");
              }}
            />
          </View>
          <View style={{ marginLeft: "auto" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("signup");
              }}
            >
              <Text
                style={{
                  color: "#967EA9",
                  fontWeight: "500",
                  fontSize: 18,
                  textDecorationLine: "underline",
                  marginTop: 10,
                }}
              >
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
