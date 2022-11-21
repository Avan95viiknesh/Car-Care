import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Images from "../images";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

export default function WalkthroughScreen() {
  const walkthroughList = [
    { id: 1, title: " WELCOME TO CAR-CARE ", image: Images.check },
    { id: 2, title: "PROVIDE GENUINE SERVICE", image: Images.repair },
    {
      id: 3,
      title: "PEACE OF MIND SAME DAY DELIVERY",
      image: Images.delivery,
    },
  ];

  return (
    <View>
      <SwiperFlatList  autoplay autoplayDelay={2} paginationStyle={{
        position:'absolute',
        bottom:0
      }} >
        {walkthroughList.map((i) => {
          return (
            <View>
              <Text> {i.title} </Text>
              <Image source={i.image} />
            </View>
          );
        })}
      </SwiperFlatList >
    </View>
  );
}

const styles = StyleSheet.create({});
