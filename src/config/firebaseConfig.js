// Página com as informações do firebase.js

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9UpV7sQ06GJdQNf7_ZjoL8t3hy7jpzgU",
  authDomain: "griffi-2000.firebaseapp.com",
  projectId: "griffi-2000",
  storageBucket: "griffi-2000.appspot.com",  // Corrigido para o domínio correto
  messagingSenderId: "470602799587",
  appId: "1:470602799587:web:b15e92a13f7ac5ae6568d6",
  measurementId: "G-D3LD9MX02B"
};

// Verifique se o Firebase já foi inicializado
const apps = getApps();
let app;

if (apps.length === 0) {
  // Inicialize o Firebase apenas se ainda não foi inicializado
  app = initializeApp(firebaseConfig);
} else {
  // Retorna a instância existente do Firebase
  app = apps[0];
}

// Inicialize o Firebase Auth
const auth = getAuth(app);

// Obtenha a instância do Firestore
const database = getFirestore(app);

export { auth, database };
export default app;
