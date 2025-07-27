`js
// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFarYOm9fZrjA0DRqDojuORr0LgUcTyGQ",
  authDomain: "privatclub-9d6f3.firebaseapp.com",
  projectId: "privatclub-9d6f3",
  storageBucket: "privatclub-9d6f3.appspot.com",
  messagingSenderId: "167501474406",
  appId: "1:167501474406:web:998ce4da897aeccc54dba7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    status.textContent = "Conta criada com sucesso!";
  } catch (error) {
    status.textContent = "Erro: " + error.message;
  }
});

