import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [parent, setTextP] = useState("");
  const [childrens, setTextC] = useState("");
  const [make, setTextMake] = useState("");
  const [model, setTextModel] = useState("");
  const [liscense, setTextL] = useState("");
  const [pool, setTextPool] = useState("");

  const childInput = useRef(null);
  const makeInput = useRef(null);
  const modelInput = useRef(null);
  const liscenseInput = useRef(null);
  const poolInput = useRef(null);

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
    const docRef = addDoc(collection(db, "users"), {
      parent,
      childrens,
      make,
      model,
      liscense,
      pool,
    });
    setTextP("");
    setTextC("");
    setTextMake("");
    setTextModel("");
    setTextL("");
    setTextPool("");
    alert(`Confirmation email has been sent to ${pool}`);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />

            <Text style={styles.body}>Parent Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={(newText) => setTextP(newText)}
              defaultValue={parent}
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => childInput.current.focus()}
            />

            <Text style={styles.body}>Children Name(s):</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name(s)"
              onChangeText={(newText) => setTextC(newText)}
              defaultValue={childrens}
              ref={childInput}
              returnKeyType="next"
              onSubmitEditing={() => makeInput.current.focus()}
            />

            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.body}>Vehicle Info</Text>

            <Text style={styles.body}>Make:</Text>
            <TextInput
              style={styles.input}
              placeholder="EX: Ford/Hyundai/BMW"
              onChangeText={(newText) => setTextMake(newText)}
              defaultValue={make}
              ref={makeInput}
              returnKeyType="next"
              onSubmitEditing={() => modelInput.current.focus()}
            />

            <Text style={styles.body}>Model:</Text>
            <TextInput
              style={styles.input}
              placeholder="EX: Explorer/Sonata/X3"
              onChangeText={(newText) => setTextModel(newText)}
              defaultValue={model}
              ref={modelInput}
              returnKeyType="next"
              onSubmitEditing={() => liscenseInput.current.focus()}
            />
            <Text style={styles.body}>Liscense Plate:</Text>
            <TextInput
              style={styles.input}
              placeholder="EX: WWW123"
              onChangeText={(newText) => setTextL(newText)}
              defaultValue={liscense}
              ref={liscenseInput}
              returnKeyType="next"
              onSubmitEditing={() => poolInput.current.focus()}
            />
            <Text style={styles.body}>Carpool Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="1234"
              onChangeText={(newText) => setTextPool(newText)}
              defaultValue={pool}
              ref={poolInput}
              returnKeyType="next"
              onSubmitEditing={submit}
            />

            <View>
              <Button title="Sign Up" onPress={submit} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
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

//run using: npm run android
