/* Declare variables below to save the different sections (divs) of your story*/
let storypart2Warriors = document.querySelector(".option-one-screen");
let storypart2Lakers = document.querySelector(".option-two-screen");
let storypart3Warriors = document.querySelector(".option-one-end");
let storypart3Lakers = document.querySelector(".option-two-end");
let firstButton = document.querySelector(".option-one");
let secondButton = document.querySelector(".option-two");
let thirdButton = document.querySelector(".option-three");
let fourthButton = document.querySelector(".option-four");
let header = document.querySelector("h1");
let background = document.querySelector("body");
let GSW = document.querySelector(".GSW");
let LAL = document.querySelector(".LAL");
let storyopening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let Go = document.querySelector(".Go");
let title = document.querySelector(".title");
let Name = document.querySelector(".Name");


Go.onclick = function() {
    storyopening.style.display = "block";
    buttons.style.display = "block";
    background.style.background = "linear-gradient(lightblue, pink)";
};


firstButton.onclick = function() {
    header.innerHTML = "The Game Begin!";
    secondButton.style.display = "none";
    firstButton.style.display = "none";
    GSW.style.display = "block";
};


GSW.ondblclick = function() {
    storypart2Warriors.style.display = "block";
    storyopening.style.display = "none";
    title.style.display = "none";
    Name.style.display = "none";
    GSW.style.display = "none";
};


secondButton.onclick = function() {
    header.innerHTML = "The Game Begin!";
    firstButton.style.display = "none";
    secondButton.style.display = "none";
    LAL.style.display = "block";
};


LAL.ondblclick = function() {
    storypart2Lakers.style.display = "block";
    storyopening.style.display = "none";
    title.style.display = "none";
    Name.style.display = "none";
    LAL.style.display = "none";
};


thirdButton.ondblclick = function() {
    storypart3Warriors.style.display = "block";
    storypart2Warriors.style.display = "none";
    background.style.background = "#ffff99";
};


fourthButton.ondblclick = function() {
    storypart3Lakers.style.display = "block";
    storypart2Lakers.style.display = "none";
    background.style.background = "#ff80b3";
};


setTimeout(() => {
    title.innerHTML = "Welcome to NBA!";
}, 3000);