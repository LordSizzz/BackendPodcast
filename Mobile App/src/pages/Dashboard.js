import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Underlined_page_title from "../components/Underlined_page_title";
import Author_card from "../components/Author_card";
import Simple_page_title from "../components/Simple_page_title";
import Podcast_item from "../components/Podcast_item";

export default function Dashboard({ navigation }) {
  const [author, setAuthor] = useState({});
  const [podcasts, setPodcasts] = useState([]);
  return (
    <View style={{ flex: 1, backgroundColor: "#1F1D1D" }}>
      <View style={{ margin: 20 }}>
        <Underlined_page_title text={"Dashboard"} />
        <View style={{ marginTop: 20 }}>
          <Author_card />
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{
                width: 70,
                height: 70,
                marginLeft: "auto",
                marginTop: -20,
              }}
              source={require("../../assets/icons/add.png")}
            />
          </TouchableOpacity>
          <Simple_page_title text={"My Podcasts"} small />
          {podcasts.length != 0 && (
            <FlatList
              style={{ flex: 1, gap: 15 }}
              renderItem={(item) => {
                <Podcast_item podcast={item.item} key={item.item.id} />;
              }}
              data={podcasts}
            />
          )}
          {podcasts.length == 0 && (
            <View>
              <Simple_page_title
                text={"No podcast to show..."}
                style={{ opacity: 0.5, marginTop: 30 }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
