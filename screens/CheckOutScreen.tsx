import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Button } from "react-native";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function CheckOutScreen({
  navigation,
}: RootTabScreenProps<"CheckOut">) {
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
    const updateStatus = updateDoc(doc(db, "users", "3"), {
      isCheckedIn: false,
    });
    navigation.navigate("GuestPickup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Out</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Check Out" onPress={submit} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
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
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
