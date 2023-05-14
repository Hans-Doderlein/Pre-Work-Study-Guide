const myImage = document.querySelector("img");
//changing images
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/coding image.jfif") {
    myImage.setAttribute("src", "assets/Alt image.jfif");
  } else {
    myImage.setAttribute("src", "assets/coding image.jfif");
  }
};
//creating button and allowing the user to set their name
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, ${myName}";
  }
}
//checks if their is a set username, if not then it prompts the user to set one
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
//Allows user to change user name by clicking on the button
myButton.onclick = () => {
  setUserName();
};
var topics = ["HTML", "CSS", "Git", "JavaScript"];
for (var x = 0; x < topics.length; x++) {
  console.log("Let's study " + topics[x] + "!");
}
/*
if (topic === "HTML") {
  console.log("Let's study HTML!");
} else if (topic === "CSS") {
  console.log("Let's study CSS!");
} else if (topic === "Git") {
  console.log("Let's study Git!");
} else if (topic === "JavaScript") {
  console.log("Let's study JavaScript!");
} else {
  console.log("Please try again!");
} */
