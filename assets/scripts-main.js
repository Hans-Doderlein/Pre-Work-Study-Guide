const myImage = document.querySelector("img");

// NEVER EVER repeat code. always extract to CONST or Function

//changing images
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  // use Console logs to check values when debugging
  // console.log("clicked button", mySrc);

  const rootAssetsPath = "./assets";
  const defaultImage = `${rootAssetsPath}/coding image.jfif`;
  const altImage = `${rootAssetsPath}/Alt image.jfif`;

  if (mySrc === defaultImage) {
    myImage.setAttribute("src", altImage);
  } else {
    myImage.setAttribute("src", defaultImage);
  }
};

//creating button and allowing the user to set their name
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setHeaderMessage(newTitle) {
  myHeading.textContent = `Study Guide made by: ${newTitle}`;
}

function setUserName() {
  const myName = prompt("Please enter your name");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    setHeaderMessage(myName);
  }
}

//checks if their is a set username, if not then it prompts the user to set one
const savedName = localStorage.getItem("name");

if (!savedName) {
  setUserName();
} else {
  const storedName = savedName;
  setHeaderMessage(storedName);
}

//Allows user to change user name by clicking on the button
myButton.onclick = () => {
  setUserName();
};

// var = old (never use) this is an illusion (does not exists)
// let is var but better
// const is best (always use)

// constants everywhere except loop
const topics = ["HTML", "CSS", "Git", "JavaScript"];

//creates a function to recall the topics
function listTopics() {
  for (let Topic of topics) {
    console.log(Topic);
  }
}

const randomTopic = topics[Math.floor(Math.random() * topics.length)];

//loops x from 0 to topics length - 1
// and then peek inside topics at index X
// for (let x = 0; x < topics.length; x++) {
//   console.log("Let's study " + topics[x] + "!");
// }

//loops all values of topics
/*for (let topic of topics) {
  console.log("Let's study " + topic + "!!!");
}*/

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}
console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("What should we study first?");
selectTopic();
