import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <Text>Screen 1</Text>
    </View>
  );
};

const Screen2 = ({
  data,
  isActive,
}: {
  data: { videoUrl: string };
  isActive: boolean;
}) => {
  return (
    <View style={styles.screen1}>
      <Text>Screen 1</Text>
    </View>
  );
};

export default function App() {
  const _renderIcon = (routeName: string) => {
    let icon = "";

    switch (routeName) {
      case "Screen1":
        icon = "home";
        break;
      case "Screen2":
        icon = "chatbubble";
        break;
    }

    return <Ionicons name={icon} size={30} color={"white"} />;
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{}}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        width={width}
        height={55}
        circleWidth={50}
        bgColor="black"
        borderColor="black"
        borderWidth={1}
        circlePosition="CENTER"
        // initialRouteName="reels"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }: any) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/")}
            >
              <Image
                source={require("../assets/images/reel.png")}
                style={{ width: 25, height: 25, tintColor: "black" }}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Screen1"
          position="LEFT"
          component={Screen1}
        />
        <CurvedBottomBarExpo.Screen
          name="Screen2"
          position="RIGHT"
          component={Screen2}
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    // top: -10,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen1: {
    flex: 1,
    backgroundColor: "white",
  },
});
