import { auth, db } from "./firebase.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

window.login = async function(){

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful");

}catch(e){

alert(e.message);

}

}

window.publishNews = async function(){

const title=document.getElementById("title").value;

const content=document.getElementById("content").value;

try{

await addDoc(collection(db,"news"),{

title:title,

content:content,

createdAt:serverTimestamp()

});

alert("News Published!");

}catch(e){

alert(e.message);

}

}
