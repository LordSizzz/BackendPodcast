import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Underlined_page_title from "../components/Underlined_page_title";
import Simple_page_title from "../components/Simple_page_title";
import Custom_input from "../components/Custom_input";
import Custom_button from "../components/Custom_button";
import axios from "axios";
import Podcast from "./Podcast";

export default function SignUp({ navigation }) {
  const [informations, setInformations] = useState({
    nom: "",
    email: "",
    password: "",
    passwordV: "",
  });
  const fetchUser = async () => {
    console.log(informations);
    const response = await axios.post(
      `https://BackendPodcast.lordsizzz.repl.co/SignUp`,
      informations
    );
    const data = response.data;
    navigation.navigate("dashboard");
    console.log(data);
    console.log(response.data);
  };
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
          <Simple_page_title text={"Sign Up"} style={{ marginBottom: 20 }} />
          <Custom_input
            label={"name"}
            icon={require("../../assets/icons/person.png")}
            placeholder={"Enter your Name..."}
            onChangeText={(text) => {
              setInformations({ ...informations, nom: text });
            }}
          />
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
          <Custom_input
            icon={require("../../assets/icons/pass.png")}
            placeholder={"Confirm your password..."}
            textContentType="password"
            label={"confirm password"}
            onChangeText={(text) => {
              setInformations({ ...informations, passwordV: text });
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Custom_button
              text={"Sign Up"}
              onPress={() => {
                navigation.navigate("home");
              }}
            />
          </View>
          <View style={{ marginLeft: "auto" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("login");
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
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
