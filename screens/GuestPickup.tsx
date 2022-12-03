import {
  Platform,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, Component } from "react";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ModalDropdown from "react-native-modal-dropdown";
import { NavigationHelpersContext } from "@react-navigation/native";

export default function GuestPickupScreen({
  navigation,
}: RootTabScreenProps<"GuestPickup">) {
  const firebaseConfig = {
    apiKey: "AIzaSyA37f8BDFALhLdLDPYasUpgSsop0-UyV8Q",
    authDomain: "carpool-fullstack.firebaseapp.com",
    projectId: "carpool-fullstack",
    storageBucket: "carpool-fullstack.appspot.com",
    messagingSenderId: "289458205081",
    appId: "1:289458205081:web:007c8bdd52c52b10ebe308",
    measurementId: "G-B6KW4JECHV",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const submit = () => {
    const updateStatus = updateDoc(doc(db, "users", text), {
      isCheckedIn: true,
    })
      .then(() => {
        navigation.navigate("CheckOut");
      })
      .catch((error) =>
        alert(
          "Invalid pickup number! Please use a number that has been registered."
        )
      );
  };

  const [text, setText] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
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
            onChangeText={(newText) => setText(newText)}
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

          <Button title="Submit" onPress={submit} />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
    width: "100%",
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
