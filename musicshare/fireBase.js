var app_firebase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaLAhP3ZPcyn8j5aQGc33dvn87OGNzWLw",
    authDomain: "musicshare-5ba51.firebaseapp.com",
    databaseURL: "https://musicshare-5ba51.firebaseio.com",
    projectId: "musicshare-5ba51",
    storageBucket: "musicshare-5ba51.appspot.com",
    messagingSenderId: "755965982140"
  };
  firebase.initializeApp(config);

  app_firebase = firebase;
})()
