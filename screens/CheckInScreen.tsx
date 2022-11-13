import { StatusBar } from "expo-status-bar";
import { useState, Component } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import { Text, View } from "../components/Themed";

export default function CheckInScreen() {
  const [text] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, width: "90%" }}>
          <Text style={styles.title}>Pickup</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.form}>Carpool Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Carpool Number"
            onChangeText={(newText) => newText}
            defaultValue={text}
          />
          <Text style={styles.form}>Pickup Location:</Text>
          <ModalDropdown
            dropdownStyle={{
              marginTop: 0.5,
              width: "20%",
              borderRadius: 10,
              borderWidth: 0,
              elevation: 3,
              overflow: "hidden",
            }}
            options={["Playground", "Art Wing"]}
          />
          <Text style={styles.form}>Student Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Student Name"
            onChangeText={(newText) => newText}
            defaultValue={text}
          />

          <Button title="Submit" onPress={() => "doSomething()"} />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    height: 100,
    fontWeight: "bold",
  },
  form: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
