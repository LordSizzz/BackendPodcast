import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Search_bar({ style, placeholder, onChangeText }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require("../../assets/icons/search.png")}
        style={{
          margin: 10,
          width: 30,
          resizeMode: "contain",
          height: 30,
          opacity: 0.17,
          marginRight: 20,
        }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#666666"}
        style={{
          fontWeight: "700",
          flex: 1,
          fontSize: 20,
          color: "white",
          marginRight: 20,
        }}
        clearTextOnFocus={true}
        onChangeText={(text) => {
          onChangeText(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282828",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
