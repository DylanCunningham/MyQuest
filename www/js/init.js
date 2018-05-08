/*INIT*/



$(function(){
console.log("init called");
changeAppPage("homePartial");
    var config = {
        apiKey: "AIzaSyBKLWcy5f7Zl_lkkWsgTKRJXj7QF7fauQs",
        authDomain: "myquest-c75eb.firebaseapp.com",
        databaseURL: "https://myquest-c75eb.firebaseio.com",
        projectId: "myquest-c75eb",
        storageBucket: "myquest-c75eb.appspot.com",
        messagingSenderId: "676321009184"
    };
    firebase.initializeApp(config);
    console.log(firebase);



});



