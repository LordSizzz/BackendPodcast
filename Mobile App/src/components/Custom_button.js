import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Custom_button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={(e) => {
        onPress(e);
      }}
    >
      <View
        style={[
          {
            backgroundColor: "#6A00A0",
            alignSelf: "center",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            marginHorizontal: 20,
            margin: 10,
            fontWeight: "900",
            fontSize: 20,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
