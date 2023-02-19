import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Playing_podcast_card from "../components/Playing_podcast_card";
import Simple_page_title from "../components/Simple_page_title";
import Search_bar from "../components/Search_bar";
import Comment_item from "../components/Comment_item";

export default function Play() {
  const [comments, setComments] = useState([]);
  return (
    <View style={{ backgroundColor: "#5A01A1", flex: 1 }}>
      <View>
        <Simple_page_title
          text={"Now Playing"}
          style={{ backgroundColor: "#1F1D1D", padding: 20 }}
        />
        <Playing_podcast_card />
        <View style={{ paddingHorizontal: 20 }}>
          <Simple_page_title text={"Comments"} small />
          <View>
            <TextInput
              placeholder="Type your comment here..."
              placeholderTextColor={"grey"}
              onSubmitEditing={(e) => {}}
              style={{
                backgroundColor: "#1F1D1D",
                marginVertical: 10,
                borderRadius: 10,
                fontSize: 20,
                padding: 10,
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            />
            <FlatList
              data={[1, 2]}
              renderItem={(item) => {
                return <Comment_item style={{ marginTop: 10 }} />;
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
