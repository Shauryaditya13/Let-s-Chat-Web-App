//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBg8-YOhdNgLWN6Y8mY-veZYr_vbTP912M",
    authDomain: "let-s-chat-web-app-208b7.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-208b7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-208b7",
    storageBucket: "let-s-chat-web-app-208b7.appspot.com",
    messagingSenderId: "884595393424",
    appId: "1:884595393424:web:703e6a8f11c32e9d8e2915",
    measurementId: "G-WX0C4YEVEX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  username=localStorage.getItem("user_namekey");
  document.getElementById("username").innerHTML="Welcome " +username;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();


