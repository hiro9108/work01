const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const backScreen = document.getElementById("backScreen");

// Function of replace class
const replaceClass = (pre, after) => {
  menuIcon.classList.replace(pre, after);
  closeIcon.classList.replace(after, pre);
  backScreen.classList.replace(after, pre);
  menu.classList.replace(after, pre);
};

// Menu Icon
menuIcon.addEventListener("click", () => {
  replaceClass("open", "close");
});

// Close Icon
closeIcon.addEventListener("click", () => {
  replaceClass("close", "open");
});

// Black Screen
backScreen.addEventListener("click", () => {
  replaceClass("close", "open");
});
