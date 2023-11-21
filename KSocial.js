var firebaseConfig = {
      apiKey: "AIzaSyBvjBbFZ3QBHKCH-8CLbZX2v_HnjPO5p2c",
      authDomain: "diary-b0711.firebaseapp.com",
      databaseURL: "https://diary-b0711-default-rtdb.firebaseio.com",
      projectId: "diary-b0711",
      storageBucket: "diary-b0711.appspot.com",
      messagingSenderId: "1048627970650",
      appId: "1:1048627970650:web:b4cd3c134a9cdcdd274e63"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addChat() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      })
      localStorage.setItem("room_name", room_name);
      window.location = "KSocial_page.html";
    }

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Romm name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+" </div><hr> ";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "KSocial_page.html";

}
   