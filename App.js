import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Jen", key: "1" },
    { name: "James", key: "2" },
    { name: "John", key: "3" },
    { name: "Jennie", key: "4" },
    { name: "James", key: "5" },
    { name: "John", key: "6" },
    { name: "Jennie", key: "7" },
    { name: "James", key: "8" },
    { name: "John", key: "9" },
    { name: "Jennie", key: "10" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    padding: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink"
  }
});
