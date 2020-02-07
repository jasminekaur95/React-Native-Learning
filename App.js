import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);

  // const clickHandler = () => {
  //   setName("Jen");
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Enter name:</Text>
        <TextInput
          onChangeText={val => {
            setName(val);
          }}
          style={styles.input}
          placeholder="e.g. Paul Watson"
          multiline
        />

        <Text>Enter age:</Text>
        <TextInput
          onChangeText={val => {
            setAge(val);
          }}
          style={styles.input}
          placeholder="e.g. 24"
          multiline
          keyboardType="numeric"
        />
        <Text style={styles.boldText}>
          My name is {name}. My age is {age}
        </Text>
      </View>
      <View style={styles.buttonContainer}></View>
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
    // backgroundColor: "pink",
    padding: 20
  },
  boldText: {
    fontWeight: "bold",
    color: "blue"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  },
  text: {
    color: "green"
  },
  buttonContainer: {
    color: "green",
    marginTop: 70
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginTop: 10,
    marginBottom: 20
  }
});
