import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Underlined_page_title({ style, text, small }) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: small ? 25 : 40,
          fontWeight: "900",
          color: "white",
          marginRight: 30,
        }}
      >
        {text}
      </Text>
      <View
        style={{ backgroundColor: "#6A00A0", height: 5, width: "70%" }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
