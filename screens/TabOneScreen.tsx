import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, Button, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [parent, setTextP] = useState('');
  const [childrens, setTextC] = useState('');
  const [make, setTextMake] = useState('');
  const [model, setTextModel] = useState('');
  const [liscense, setTextL] = useState('');
  const [pool, setTextPool] = useState('');

  // const childInput = useRef(null);
  // const makeInput = useRef(null);
  // const modelInput = useRef(null);
  // const liscenseInput = useRef(null);
  // const poolInput = useRef(null);

  const submit = () => {
    alert(`Confirmation email has been sent to ${pool}`);
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
        <Text style={styles.title}>Registration</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Text style={styles.body}>Parent Name:</Text>
        <TextInput style={styles.input}
          placeholder="Full Name"
          onChangeText={newText => setTextP(newText)}
          defaultValue={parent}
          autoFocus={true}
          returnKeyType="next"
          // onSubmitEditing={() => childInput.current.focus()}
        />

        <Text style={styles.body}>Children Name(s):</Text>
        <TextInput style={styles.input}
          placeholder="Full Name(s)"
          onChangeText={newText => setTextC(newText)}
          defaultValue={childrens}
          // ref={childInput}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.body}>Vehicle Info</Text>

        <Text style={styles.body}>Make:</Text>
        <TextInput style={styles.input}
          placeholder="EX: Ford/Hyundai/BMW"
          onChangeText={newText => setTextMake(newText)}
          defaultValue={make}
        />
        
        <Text style={styles.body}>Model:</Text>
        <TextInput style={styles.input}
          placeholder="EX: Explorer/Sonata/X3"
          onChangeText={newText => setTextModel(newText)}
          defaultValue={model}
        />
        <Text style={styles.body}>Liscense Plate:</Text>
        <TextInput style={styles.input}
          placeholder="EX: WWW123"
          onChangeText={newText => setTextL(newText)}
          defaultValue={liscense}
        />
        <Text style={styles.body}>Carpool Number:</Text>
        <TextInput style={styles.input}
          placeholder="1234"
          onChangeText={newText => setTextPool(newText)}
          defaultValue={pool}
        />

        <View>
          <Button title="Sign Up" onPress={submit} />
        </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

//run using: npm run android
