// Página de Cadastro de usúario

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { database } from "../config/firebaseConfig";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore"; // Funções do Firestore
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  // Função para criar conta no Firestore
  const handleSignUp = async () => {
    if (!cpf || !name || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Referência para o contador de ID
      const counterRef = doc(database, "users", "counter");

      // Obter o contador atual do Firestore
      const counterDoc = await getDoc(counterRef);

      let newId = "01"; // Default caso não exista documento de contador

      if (counterDoc.exists()) {
        const currentCounter = counterDoc.data().value;

        // Gerar o próximo ID sequencial (ex: "02", "03", ...)
        newId = String(currentCounter + 1).padStart(2, "0");

        // Atualizar o contador no Firestore
        await updateDoc(counterRef, {
          value: currentCounter + 1,
        });
      } else {
        // Se o contador não existir, criar um documento com contador inicial
        await setDoc(counterRef, { value: 2 });
      }

      // Criando o documento do usuário com o novo ID sequencial
      const userDocRef = doc(database, "users", newId); // Usando o novo ID sequencial
      await setDoc(userDocRef, {
        cpf,       // CPF dentro do documento
        name,      // Nome do usuário
        password,  // Senha do usuário
      });

      setError(null);
      alert("Conta criada com sucesso!");
      navigation.navigate("Login"); // Redireciona para a tela de login
    } catch (e) {
      setError("Erro ao criar conta: " + e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Já possui uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
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
  linkText: {
    color: "#00008B",
    textAlign: "center",
    marginTop: 10,
  },
});
