var firebaseConfig = {
      apiKey: "AIzaSyD9AVRiS2X_LGbYjnUNZrDROeDNotzphBI",
      authDomain: "kwitter-6299d.firebaseapp.com",
      databaseURL: "https://kwitter-6299d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6299d",
      storageBucket: "kwitter-6299d.appspot.com",
      messagingSenderId: "1008794435860",
      appId: "1:1008794435860:web:a1684b85b3d38c990c0201"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}