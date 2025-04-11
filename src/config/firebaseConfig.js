// Página com as informações do firebase.js

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",  // Corrigido para o domínio correto
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
