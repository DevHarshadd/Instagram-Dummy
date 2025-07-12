import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("window").height;

export default function Reels({
  data,
  isActive,
}: {
  data: { videoUrl: string };
  isActive: boolean;
}) {
  const player = useVideoPlayer(data?.videoUrl, (player) => {
    player.loop = true;
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  });

  useEffect(() => {
    if (player) {
      isActive ? player.play() : player.pause();
    }
  }, [isActive]);

  return (
    <SafeAreaView style={styles.container}>
      {player ? (
        <View>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            contentFit="cover"
          />

          <View
            style={{
              padding: 10,
              position: "absolute",
              bottom: 50,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Image
                    source={require("../assets/images/user.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      flexDirection: "row",
                      paddingHorizontal: 10,
                    }}
                  >
                    {data?.title}
                    {"    "}
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Follow
                    </Text>
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  color: "white",
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
                numberOfLines={1}
                lineBreakMode="head"
              >
                {data?.description}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <View style={{ paddingHorizontal: 10 }}>
                  <Image
                    source={require("../assets/images/heart.png")}
                    style={styles.likecomentIcon}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Image
                    source={require("../assets/images/chat.png")}
                    style={styles.likecomentIcon}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Image
                    source={require("../assets/images/send (2).png")}
                    style={styles.likecomentIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Text style={{ color: "white" }}>Loading video...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  video: {
    height: height - 120,
    width: width,
    marginVertical: "5%",
    columnGap: 10,
  },

  likecomentIcon: {
    width: 25,
    height: 25,
  },
});
