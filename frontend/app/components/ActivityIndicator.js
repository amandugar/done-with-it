import React from "react"
import { StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"
import colors from "../config/colors"

function ActivityIndicator({ visible = false }) {
  if (!visible) return null
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loading-dots.json")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    backgroundColor: colors.white,
    position: "absolute",
    width: "100%",
    opacity: 0.8,
    zIndex: 1,
  },
})
export default ActivityIndicator
