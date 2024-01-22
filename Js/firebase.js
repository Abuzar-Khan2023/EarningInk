import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function submit() {
  const full_name = document.getElementById('full_name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const Cpassword = document.getElementById('Cpassword').value;

  if (!validate_email(email) || !validate_password(password)) {
    alert('Sorry! Email or Password is Incorrect!!');
    return;
  }

  if (!validate_field(full_name) || !validate_field(username)) {
    alert('One or more Extra Fields is Incorrect!!');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const databaseRef = ref(database);
      const userData = {
        full_name: full_name,
        username: username,
        email: email,
        last_login: Date.now()
      };
      set(ref(database, 'users/' + user.uid), userData);
      alert('User Created!!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function validate_email(email) {
    expression = /[@]+@\w+(\.w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } 
    else {
        return false
    }
}

function validate_password(password) {
    if(password < 8) {
        return false
    }
    else {
        return true
    }
}

function validate_field(field) {
    if(field == null) {
        return false
    }
    
    if(field.length <= 0) {
        return false
    }
    else {
        return true
    }
}