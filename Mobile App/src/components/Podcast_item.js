import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Podcast_item({ style, podcast }) {
  return (
    <View
      style={[
        { flexDirection: "row", overflow: "hidden", marginTop: 20 },
        style,
      ]}
    >
      <View style={{ width: "40%" }}>
        <Image
          source={{ uri: podcast.image }}
          style={{
            width: 160,
            resizeMode: "contain",
            height: 160,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ width: "60%", paddingLeft: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#ffffff58",
              width: 7,
              height: 7,
              borderRadius: 10,
              marginRight: 5,
            }}
          ></View>
          <Text
            numberOfLines={1}
            style={{
              color: "#ffffff58",
              fontWeight: "bold",
              width: "90%",
              fontSize: 18,
            }}
          >
            {podcast.podcaster}
          </Text>
        </View>
        <Text
          numberOfLines={4}
          style={{
            width: "90%",
            color: "white",
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          {podcast.name} - {podcast.text}
        </Text>
        <Image
          source={require("../../assets/icons/play.png")}
          style={{ width: 35, height: 36, marginLeft: "auto" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
