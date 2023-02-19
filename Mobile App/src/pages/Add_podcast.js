import {
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Simple_page_title from "../components/Simple_page_title";
import Custom_button from "../components/Custom_button";

export default function Add_podcast({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [newPodcast, setNewPodcast] = useState({});
  const paused = true;
  return (
    <View style={{ backgroundColor: "#1F1D1D", flex: 1, position: "relative" }}>
      <ScrollView style={{ margin: 20 }}>
        <Simple_page_title text={"Add podcast"} style={{ marginBottom: 30 }} />
        <Simple_page_title text={"Title"} small />
        <TextInput
          placeholder="palce ol..."
          style={{ fontSize: 24, color: "white" }}
          placeholderTextColor="grey"
        />
        <Simple_page_title
          text={"Description"}
          style={{ marginTop: 30 }}
          small
        />
        <TextInput
          placeholder="palce ol..."
          style={{ fontSize: 20, color: "white" }}
          placeholderTextColor="grey"
          multiline={true}
        />
        <Simple_page_title text={"Content"} style={{ marginTop: 30 }} small />
        <TextInput
          placeholder="palce ol..."
          style={{ fontSize: 18, color: "white" }}
          placeholderTextColor="grey"
          multiline={true}
        />
      </ScrollView>
      <View style={{ marginBottom: 20 }}>
        <Custom_button text={"Generate"} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              backgroundColor: "#1F1D1D",
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: "auto",
              elevation: 10,
              padding: 10,
              width: "80%",
              borderRadius: 10,
            }}
          >
            <Simple_page_title small text={"Title"} />
            <Text style={{ color: "white", fontSize: 18 }} numberOfLines={3}>
              {}
            </Text>
            <TouchableOpacity>
              {!paused && (
                <Image
                  source={require("../../assets/icons/play.png")}
                  style={{ width: 50, height: 50, alignSelf: "center" }}
                />
              )}

              {paused && (
                <Image
                  source={require("../../assets/icons/pause.png")}
                  style={{
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                />
              )}
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Custom_button
                text={"Cancel"}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Custom_button text={"Confirm"} />
            </View>
          </View>
        </Modal>
      </View>
      {modalVisible && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#00000070",
          }}
        ></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
