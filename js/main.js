// Web Storage API

// Not a part of the DOM - refers to the Window API
// Availabe in JS via the global variable: window

// We don't have to type window. It is implied.

/* window.alert(window.location);
alert(location); */

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Ismail",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// Session Storage

/* sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); */

// Local Storage

localStorage.setItem("mylocalStore", JSON.stringify(myObject));
// Removing a specific item or clearing out our local storage
/* localStorage.removeItem("mylocalStore"); */
/* localStorage.clear(); */
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(mylocalData);

// Getting Key using Index
const key = localStorage.key(0);
console.log(key);

// Getting length of our local Storage
const length = localStorage.length;
console.log(length);
