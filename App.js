import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);
  const [person, setPerson] = useState({
    name: "Dave",
    hobby: "playing guitar"
  });

  // const clickHandler = () => {
  //   setName("Jen");
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          My name is {name}. My age is {age}
        </Text>
        <Text>
          My friend's name is {person.name}. he loves {person.hobby}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Update User"
          onPress={() => {
            setName("James"),
              setAge(25),
              setPerson({ name: "Den", hobby: "listening music" });
          }}
        />
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
  },
  buttonContainer: {
    color: "green",
    marginTop: 70,
    backgroundColor: "pink"
  }
});
