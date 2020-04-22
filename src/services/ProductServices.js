//import { toRefs, reactive, computed } from "@vue/composition-api";
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC05sP_cG8TWHgzEm0nkmxQn88XsyT6O2s",
  authDomain: "rambullweb.firebaseapp.com",
  databaseURL: "https://rambullweb.firebaseio.com",
  projectId: "rambullweb",
  storageBucket: "rambullweb.appspot.com",
  messagingSenderId: "227144330944",
  appId: "1:227144330944:web:778edd87a950b048874725"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//var users = db.collection("usuariosLog");
var productos = db.collection("users")("Productos");
var ventas = db.collection("users")("Ventas");

export default {
  setProduct(product) {
    productos
      .add(product)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  },
  getProducts() {
    productos.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  },
  setVentas(venta) {
    ventas
      .add(venta)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  },
  getVentas() {
    ventas.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }
};
