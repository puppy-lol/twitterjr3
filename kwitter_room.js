var firebaseConfig = {
    apiKey: "AIzaSyB1Pssz6SSezFjZR3JLYinNakIxomWb9zU",
    authDomain: "twitter-37c08.firebaseapp.com",
    projectId: "twitter-37c08",
    storageBucket: "twitter-37c08.appspot.com",
    messagingSenderId: "246615551625",
    appId: "1:246615551625:web:d3ea9db6ab0a8d96672058",
    measurementId: "G-V8NJTMJH67"
  };
  firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose: "adding room name"}); 
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("room name- " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
    document.getElementById("output").innerHTML = row;
    });});}
getData();