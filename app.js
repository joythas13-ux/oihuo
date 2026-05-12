import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyABYByDW8bAOCHfCwcRNaSN1wwifQEhzA4",
  authDomain: "freefiretopup-bbb23.firebaseapp.com",
  projectId: "freefiretopup-bbb23",
  storageBucket: "freefiretopup-bbb23.firebasestorage.app",
  messagingSenderId: "305435218774",
  appId: "1:305435218774:web:d258e8218bd1bdec50fcf7",
  measurementId: "G-HLNGZ236PZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 REGISTER
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.display = "block";
      msg.innerText = "Registered Successfully ✅";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    })
    .catch(err => {
      msg.style.display = "block";
      msg.style.background = "red";
      msg.innerText = err.message;
    });
};

// 🔹 LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.display = "block";
      msg.innerText = "Login Success 🔥";

      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    })
    .catch(err => {
      msg.style.display = "block";
      msg.style.background = "red";
      msg.innerText = err.message;
    });
};