//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBbe3U0akOkF7XwbKn5aoxOU-yRAOTIKbc",
  authDomain: "let-s-chat-web-app-4868b.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-4868b-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-4868b",
  storageBucket: "let-s-chat-web-app-4868b.appspot.com",
  messagingSenderId: "462581792020",
  appId: "1:462581792020:web:0f8fb9d001a0b5ee8d1601",
  measurementId: "G-GT4BQD1K29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  username=localStorage.getItem("user_namekey");
  document.getElementById("username").innerHTML="Welcome " +username;

  function addroom() {
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("roomname_key",room_name);
    firebase.database().ref("/").child(room_name).update({purpose:"room_name"});
    window.location="kwitter_page.html";
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);

      row='<div class="room_name" id="'+Room_names+'" onclick="redirecttoroomname(this.id)">#'+Room_names+'</div> <hr>';
      document.getElementById("output").innerHTML+=row;
    //End code
    });
  });
}
getData();

function redirecttoroomname(thisroom) {
  console.log("right now we are in the room"+thisroom);
  localStorage.setItem("room_namekey",thisroom);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_namekey");
  localStorage.removeItem("roomname_key");
  window.location="index.html";
}


