import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Simple_page_title({ style, text, small }) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: small ? 30 : 40,
          fontWeight: "900",
          marginBottom: -7,
          color: "white",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
