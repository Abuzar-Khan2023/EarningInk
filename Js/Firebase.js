import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_QIWUbpd3c6m-O23D6Rt9_LpymW3EhsM",
    authDomain: "blog-website-sep.firebaseapp.com",
    databaseURL: "https://blog-website-sep-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blog-website-sep",
    storageBucket: "blog-website-sep.appspot.com",
    messagingSenderId: "905757738497",
    appId: "1:905757738497:web:7ec8178bc926a44b9b6200",
    measurementId: "G-13VPL3G3WB"
  };

//Initializing Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var LoginForomDB = firebase.databace().ref("LoginForm");

document.getElementById("LoginForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var username = getElementVal("username");
    var email = getElementVal('email');
    var password = getElementVal("pasword");
    var Cpassword = getElementVal("Cpassword");
    var Lusername = getElementVal("Lusername");
    var Lpassword = getElementVal("Lpassword");
    
    saveData(name, username, email, password, Cpassword, Lusername, Lpassword);
}

const saveData = (name, username, email, password, Cpassword, Lusername, Lpassword) => {
    var newLoginForm = LoginForomDB.push();

    newLoginForm.set({
        name: name,
        username: username,
        email: email,
        password: password,
        Cpassword: Cpassword,
        Lusername: Lusername,
        Lpassword: Lpassword,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};