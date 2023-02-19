import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Custom_input({
  placeholder,
  icon,
  label,
  onChangeText,
  textContentType,
}) {
  return (
    <View style={{ marginTop: 7 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{label}</Text>
      <View style={styles.subContainer}>
        <View>
          <Image style={styles.icon} source={icon} />
        </View>
        <TextInput
          textContentType={textContentType ? textContentType : "text"}
          placeholder={placeholder}
          onChangeText={(text) => {
            onChangeText(text);
          }}
          style={{
            fontSize: 18,
            marginLeft: 10,
            width: "80%",
            fontWeight: "bold",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    resizeMode: "contain",
    height: "auto",
    margin: 5,
    minHeight: 40,
    marginLeft: 10,
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
