# 📱 App Mobile com React Native + Firebase

Desenvolvido por: **Lucca Silva Oliveira**  
Tecnologias: 🔥 React Native • 🌐 JavaScript • 🚀 Firebase (Firestore, Auth)

---

## 🚀 Visão Geral
Um aplicativo mobile moderno desenvolvido com **React Native** e integrado ao **Firebase** para:
- Armazenamento de dados em tempo real
- Autenticação de usuários
- E mais recursos planejados para o futuro!

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</div>

---

## 🔥 Recursos

- ✔ Autenticação de Usuários (Email/Senha, Google)
- ✔ Banco de Dados em Tempo Real (Firestore)
- ✔ Armazenamento de Arquivos (Firebase Storage)
- ✔ Design Responsivo (Styled Components ou Tailwind)
- ✔ Notificações em Tempo Real (em breve)

---

## ⚙️ Configuração

### 🚀 Pré-requisitos
- Node.js (v18+)
- Expo CLI (opcional)
- Conta no Firebase: [https://firebase.google.com](https://firebase.google.com)

### ⚡ Instalação

Clone o repositório:
```bash
git clone https://github.com/luccasilva2/nome-do-repo.git
cd nome-do-repo
```

Instale as dependências:
```bash
npm install
# ou
yarn install
```

### 📁 Configure o Firebase

Crie um arquivo `firebaseConfig.js` em `./src/config/` com suas credenciais:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 🚀 Inicie o app:
```bash
npm start
# ou
expo start
```

---

## 📸 Preview

| Tela de Login | Dashboard | Perfil |
|---|---|---|
| <img src="https://via.placeholder.com/300x600/FFCA28/000000?text=Login" width="200"> | <img src="https://via.placeholder.com/300x600/61DAFB/000000?text=Dashboard" width="200"> | <img src="https://via.placeholder.com/300x600/20232A/FFFFFF?text=Perfil" width="200"> |

---

## 📌 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch:
```bash
git checkout -b minha-feature
```
3. Commit suas alterações:
```bash
git commit -m "Adicionei um novo recurso"
```
4. Envie para o repositório remoto:
```bash
git push origin minha-feature
```
5. Abra um Pull Request!

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<div align="center">
  <p>✨ <strong>Feito com ❤️ e React Native</strong> ✨</p>
  <a href="https://github.com/luccasilva2">🔗 Meu GitHub</a> |
  📧 <strong>silvaoliveiralucca@gmail.com</strong>
</div>

---

## 🎨 Personalize!

- Substitua as imagens de placeholder por screenshots reais do app
- Adicione um GIF demonstrando o app funcionando
- Inclua o link para o APK (se aplicável):
```markdown
[📲 Baixar APK](https://drive.google.com/uc?export=download&id=SEU_ID_DO_ARQUIVO)
```

👉 Dica: Use [Shields.io](https://shields.io) para criar badges personalizadas!

