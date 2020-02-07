import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Jen", id: "1" },
    { name: "James", id: "2" },
    { name: "John", id: "3" },
    { name: "Jennie", id: "4" },
    { name: "James", id: "5" },
    { name: "John", id: "6" },
    { name: "Jennie", id: "7" },
    { name: "James", id: "8" },
    { name: "John", id: "9" },
    { name: "Jennie", id: "10" }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    width: 150
  }
});
