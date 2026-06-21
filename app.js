import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "./config/firebase.js";

// ==================== SIGNUP ====================

const sinp = document.getElementById("sinp");
const spas = document.getElementById("spas");
const sbtn = document.getElementById("sbtn");

sbtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, sinp.value, spas.value)
    .then((userCredential) => {
      alert("Account Created Successfully!");
      console.log("User:", userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
});

// ==================== LOGIN ====================

const linp = document.getElementById("linp");
const lpas = document.getElementById("lpas");
const lbtn = document.getElementById("lbtn");

lbtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, linp.value, lpas.value)
    .then((userCredential) => {
      alert("Login Successfully!");
      console.log("User:", userCredential.user);

      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
});