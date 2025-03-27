// Página de inicio do App

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import BottomTabNavigator from "../../components/BottomTabNavigator";
import { database } from "../config/firebaseConfig" // Import atualizado
import { collection, setDoc, doc } from "firebase/firestore";

export default function Inicial() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSaveData = async () => {
    if (!name || !age) {
      setError("Por favor, preencha todos os campos.");
      setSuccess(null);
      return;
    }

    try {
      const userUid = "test-user"; // Substitua por UID real se estiver usando autenticação
      const userDoc = doc(collection(database, "users"), userUid); // Substituído por `database`
      await setDoc(userDoc, { name, age: parseInt(age, 10) });

      setError(null);
      setSuccess("Dados salvos com sucesso no Firebase!");
      console.log("Dados salvos:", { name, age });
    } catch (e) {
      setError("Erro ao salvar os dados: " + e.message);
      setSuccess(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste Firebase</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        {success && <Text style={styles.successText}>{success}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSaveData}>
          <Text style={styles.buttonText}>Salvar no Firebase</Text>
        </TouchableOpacity>
      </View>
      <BottomTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  successText: {
    color: "green",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#00008B",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
