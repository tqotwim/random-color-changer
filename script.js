
const topDiv = document.getElementById("top"); //grabs top div element from html
const middleDiv = document.getElementById("middle"); //grabs middle div element from html
const bottomDiv = document.getElementById("bottom"); // grabs bottom div element from html
const colorChangeButton = document.getElementById("colorChange"); // grabs button from html
const whyThoImage = document.getElementById("whytho");
let backColors = 
  ["#9B80FF","#FFD4E9","#51FFF2", "#80EBFF", 
  "#D1FFD5", "#F0C7FF", "#E8C1BE", "#F1FFDE", 
  "#65BF98", "#48E8D6"]; // array of hex colors


let changeTopBackground = function(){ 
  let randBackColor = backColors[Math.floor(Math.random() * backColors.length)]; //returns random color from backColors array
  topDiv.style.background = randBackColor; // sets top div background style to randBackColor
}
topDiv.addEventListener("click", changeTopBackground); //adds event listener when click top div to change background color

let changeMiddleBackground = function(){ 
  let randBackColor = backColors[Math.floor(Math.random() * backColors.length)]; //returns random color from backColors array
  middleDiv.style.background = randBackColor; // sets middle div background style to randBackColor
}

middleDiv.addEventListener("click", changeMiddleBackground);

let changeBottomBackground = function(){ 
  let randBackColor = backColors[Math.floor(Math.random() * backColors.length)]; //returns random color from backColors array
bottomDiv.style.background = randBackColor; // sets bottom div background style to randBackColor
}
bottomDiv.addEventListener("click", changeBottomBackground);


colorChangeButton.addEventListener("click", function(){
  whyThoImage.style.display = "block";});
colorChangeButton.addEventListener("click", function(){
    colorChangeButton.style.display = "none";});
colorChangeButton.addEventListener("click", function(){
      alert("why tho?");
    });
