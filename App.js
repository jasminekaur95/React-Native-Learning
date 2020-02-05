import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          Welcome to my project!<Text> This is the beginning.</Text>
        </Text>
        <Text>Welcome to my project!</Text>
        <Text>Welcome to my project!</Text>
        <Text>Welcome to my project!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  },
  text: {
    color: "green"
  }
});
