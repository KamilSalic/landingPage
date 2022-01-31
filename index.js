const hamburger = document.querySelector(".hamburger-bar");
let hiddenMenu = document.querySelector(".hidden-menu");
let topHambLine = document.querySelector(".top-line");
let middleHambLine = document.querySelector(".middle-line");
let bottomHambLine = document.querySelector(".bottom-line");
hiddenMenu.style.display === "none";

let navStatus = false;

function showAndHideMenu() {
  hiddenMenu.classList.toggle("side-menu");
}
function showMenu() {
  if (navStatus === false) {
    function changedTopHambLine() {
      topHambLine.classList.toggle("topHambLine-cross");
      middleHambLine.classList.toggle("middleHambLine-cross");
      bottomHambLine.classList.toggle("bottomHambLine-cross");
    }
    changedTopHambLine();
    navStatus === true;
    showAndHideMenu();
  } else if (navStatus === true) {
    changedTopHambLine();
    hiddenMenu.style.marginTop = "-0.5rem";
    navStatus === false;
    showAndHideMenu();
  }
}

hamburger.addEventListener("click", showMenu);
