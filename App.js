import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";

export default function App() {
  const [todos, settodos] = useState([
    { text: "Work on Resume", key: "1" },
    { text: "Do grocery shopping", key: "2" },
    { text: "Cook breakfast", key: "3" }
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 60
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "orange"
  }
});
