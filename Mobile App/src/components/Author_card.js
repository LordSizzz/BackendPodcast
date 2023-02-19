import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Underlined_page_title from "./Underlined_page_title";

export default function Author_card() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 150, height: 150, borderRadius: 1000, marginRight: 10 }}
        source={require("../../assets/mock.jpg")}
      />
      <View style={{ width: "100%" }}>
        <Underlined_page_title
          text={"Bonjour"}
          small={true}
          style={{ width: "40%" }}
        />
        <Text style={{ color: "#ffffff56", width: "56%", fontSize: 20 }}>
          Some stuffs about the author and what he want to tell people about
          him...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
