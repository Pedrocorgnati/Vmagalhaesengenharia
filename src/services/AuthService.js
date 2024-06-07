import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { modalService } from "./ModalService";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyTc5TUS5k94j0uVNmdhbRjCDJUs0I_hw",
    authDomain: "vmagalhaes-engenharia.firebaseapp.com",
    projectId: "vmagalhaes-engenharia",
    storageBucket: "vmagalhaes-engenharia.appspot.com",
    messagingSenderId: "227618291518",
    appId: "1:227618291518:web:9fcdb036563b9350d3366f",
    measurementId: "G-6YKG92BBH6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

class AuthService {
  async signUp(email, password, role, name, birthday, city) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Adicionar usuário ao Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
        role,
        name,
        birthday,
        city,
        uid: user.uid
      });
      modalService.openInfo("Success, user created!");
      return { success: true };
    } catch (error) {
      this.showError("Error signing up!", error);
      return { success: false };
    }
  }

  async login(email, password, setUserState) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      const userData = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        token,
        uid: user.uid,
        name: user.displayName || '',
        surname: '',
        whatsapp: '',
        profileImageUrl: user.photoURL || '',
        numberOfDiamonds: 0,
      };
      setUserState(userData);
      return { success: true, data: userData };
    } catch (error) {
      this.showError("Error logging in!", error);
      setUserState(null);
      return { success: false };
    }
  }

  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      this.showError("Error logging out!", error);
      throw error;
    }
  }

  showError(msg, error) {
    console.error(msg, error);
    modalService.openError(msg);
  }
}

export const authService = new AuthService();
