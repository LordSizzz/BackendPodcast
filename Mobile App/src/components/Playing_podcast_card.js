import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function () {
  return (
    <View style={[{}]}>
      <View
        style={[
          {
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: "#1F1D1D",
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderRadius: 400,
              borderColor: "#eeeeee",
            }}
          >
            <Image
              style={{ borderRadius: 400, width: 50, height: 50, margin: 3 }}
              source={require("../../assets/mock.jpg")}
            />
          </View>
        </View>

        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#ffffff28",
              textAlign: "center",
              marginTop: 5,
              width: "100%",
            }}
          >
            Podcast title
          </Text>
          <Text
            numberOfLines={3}
            style={{
              color: "#ffffff",
              fontSize: 18,
              textAlign: "center",
              width: "100%",
            }}
          >
            some descripton of the podca zefnoea ceqrc st and what it is ..
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          {false && (
            <Image
              style={{ width: 100, height: 100, marginHorizontal: 10 }}
              source={require("../../assets/icons/play_black.png")}
            />
          )}
          <Image
            style={{ width: 100, height: 100, marginHorizontal: 10 }}
            source={require("../../assets/icons/pause_black.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
