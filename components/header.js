import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  title: {
    textAlign: "center"
  }
});
