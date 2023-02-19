import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Simple_page_title from "../components/Simple_page_title";
import Underlined_page_title from "../components/Underlined_page_title";
import Podcast_grand_item from "../components/Podcast_grand_item";
import Podcast_item from "../components/Podcast_item";
import { image } from "../../assets/image";

export default function Home() {
  const [podcasts, setPodcasts] = useState([
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
    {
      id: 1,
      title: "My first Podcast",
      podcaster: "Jonh Doe",
      name: "my runner life",
      text: "a small sample description",
      image: image,
    },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "#1F1D1D" }}>
      <View style={{ margin: 20 }}>
        <Underlined_page_title text={"Podcastini"} />
        {podcasts.length != 0 ? (
          <View>
            <View style={{}}>
              <FlatList
                horizontal={true}
                data={podcasts}
                scrollEnabled={true}
                renderItem={(item) => {
                  return (
                    <Podcast_grand_item
                      podcast={item.item}
                      key={item.item.id}
                    />
                  );
                }}
              />
            </View>
            <Simple_page_title small text={"For you"} />
            <FlatList
              data={podcasts}
              renderItem={(item) => {
                return <Podcast_item podcast={item.item} key={item.item.id} />;
              }}
              scrollEnabled={true}
            />
          </View>
        ) : (
          <Simple_page_title
            style={{ opacity: 0.6, marginTop: 30 }}
            small
            text={"No Podcasts to show..."}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
