// ADD YOUR FIREBASE LINKS
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
  roomname=localStorage.getItem("roomname_key");
  document.getElementById("roomname").innerHTML="roomname:"+roomname;

  function send() {
        message=document.getElementById("msg").value;
        firebase.database().ref(roomname).push({
              name:username,message:message,like:0   
        });
        document.getElementById("msg").value="";
  }



function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
     { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
sendername=message_data["name"];
message=message_data["message"];
likes=message_data["like"];
h4tag="<h4>"+sendername+"<img class='user_tick' src='tick.png'></h4>";
messagetag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span></button><hr>";
row=h4tag+messagetag+likebutton+spantag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updatelike(msg_id) {
    console.log("clicked on likebutton in "+msg_id);
    newlikes=document.getElementById(msg_id).value;
    updatedlikes=Number(newlikes)+1;
    console.log(updatedlikes);
    firebase.database().ref(roomname).child(msg_id).update({like:updatedlikes});
}

function logout() {
    localStorage.removeItem("user_namekey");
    localStorage.removeItem("roomname_key");
    window.location="index.html";
}
