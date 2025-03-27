// Página de Login

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; // Funções do Firestore
import { getAuth } from 'firebase/auth'; // Função do Firebase Auth
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Hook de navegação

  // Função para realizar o login
  const handleLogin = async () => {
    if (cpf === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha ambos os campos!');
      return;
    }

    try {
      const db = getFirestore(); // Instância do Firestore

      // Consulta para verificar o CPF e senha no Firestore
      const q = query(collection(db, 'users'), where('cpf', '==', cpf)); // Consulta para buscar o CPF no Firestore
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert('Erro', 'Usuário não encontrado!');
        return;
      }

      // Verifica se o usuário existe e se a senha está correta
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        
        // Verifica a senha
        if (userData.password === password) {
          Alert.alert('Login bem-sucedido!', 'Você está logado!');
          // Navega para a tela inicial após o login bem-sucedido
          navigation.navigate('Inicial');
        } else {
          Alert.alert('Erro', 'Senha incorreta!');
        }
      });
    } catch (error) {
      Alert.alert('Erro', 'Algo deu errado! Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
