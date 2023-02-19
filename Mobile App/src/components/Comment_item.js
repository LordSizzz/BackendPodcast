import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Comment_item({ style }) {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <Image
        style={{ marginRight: 10, width: 50, height: 50, borderRadius: 100 }}
        source={require("../../assets/mock.jpg")}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", color: "#ffffff86" }}>
          user name
        </Text>
        <Text style={{ width: "90%", fontWeight: "500", color: "white" }}>
          some comments that i wrote...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
