import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Podcast_grand_item({ podcast }) {
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        width: 300,
        marginRight: 20,
      }}
    >
      <Image
        source={{ uri: podcast.image }}
        style={{
          resizeMode: "contain",
          borderRadius: 10,
          height: 300,
          width: 300,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "#00000080",
          height: 60,
          width: "80%",
          padding: 5,
          borderBottomRightRadius: 70,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {podcast.name}
        </Text>

        <Text numberOfLines={1} style={{ color: "white", width: "90%" }}>
          {podcast.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
