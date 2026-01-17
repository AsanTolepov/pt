import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Bizga shu kerak!

// Sizning config ma'lumotlaringiz
const firebaseConfig = {
  apiKey: "AIzaSyAKQ9GdUlI37naMQBbsul_7OHmTKeJ2etQ",
  authDomain: "frends-test.firebaseapp.com",
  projectId: "frends-test",
  storageBucket: "frends-test.firebasestorage.app",
  messagingSenderId: "390872096033",
  appId: "1:390872096033:web:8a41c12dbc9fc94ca53260",
  measurementId: "G-6BGR8BW6TP"
};

// Ilovani ishga tushirish
const app = initializeApp(firebaseConfig);

// Bazani eksport qilish (buni App.tsx da ishlatamiz)
export const db = getFirestore(app);