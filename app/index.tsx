import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import fetchreelsVideo from "./apifetchVideo";
import BottomTabs from "./BottomTabs";
import Reels from "./reels";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [reelsVideo, setReelsVideo] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchreelsVideo().then((data: any) => {
      setReelsVideo(data);
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      {/* Optional header */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          Reels
        </Text>
        <Image
          source={require("../assets/images/camera.png")}
          style={{ width: 25, height: 25 }}
        />
      </View>
      <SwiperFlatList
        vertical
        pagingEnabled
        data={reelsVideo}
        onChangeIndex={({ index }) => setCurrentIndex(index)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Reels data={item} isActive={index === currentIndex} />
        )}
        showPagination={false}
      />
      <BottomTabs />
    </SafeAreaView>
  );
}
