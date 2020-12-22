/*
  Navigation bar section
*/
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

/*
  Header title section
*/
const headerTitle01 = document.getElementById("headerTitle01");
const headerTitle02 = document.getElementById("headerTitle02");
const headerTitle03 = document.getElementById("headerTitle03");

/*
  Slider section
*/
const header = document.getElementById("header");
const slider01 = document.getElementById("slider01");
const slider02 = document.getElementById("slider02");
const slider03 = document.getElementById("slider03");
const sliders = [slider01, slider02, slider03];

// Change image class function
const changeBackgroundImg = (sliderImage) => {
  if (!header.classList.contains(sliderImage)) {
    header.className = `header ${sliderImage}`;
  }
};

// Focus slider color
const focusSliderColor = (targetSlider) => {
  sliders.forEach((el) => {
    if (el === targetSlider) {
      el.classList.add("sliderFocus");
    } else {
      el.classList.remove("sliderFocus");
    }
  });
};

slider01.addEventListener("click", () => {
  changeBackgroundImg("sliderImg01");
  focusSliderColor(slider01);

  // Todo create function for headerTitle
  headerTitle01.classList.replace("close", "open");
  headerTitle02.classList.replace("open", "close");
  headerTitle03.classList.replace("open", "close");
});

slider02.addEventListener("click", () => {
  changeBackgroundImg("sliderImg02");
  focusSliderColor(slider02);

  // Todo create function for headerTitle
  headerTitle01.classList.replace("open", "close");
  headerTitle02.classList.replace("close", "open");
  headerTitle03.classList.replace("open", "close");
});

slider03.addEventListener("click", () => {
  changeBackgroundImg("sliderImg03");
  focusSliderColor(slider03);

  // Todo create function for headerTitle
  headerTitle01.classList.replace("open", "close");
  headerTitle02.classList.replace("open", "close");
  headerTitle03.classList.replace("close", "open");
});

// Auto play mode
setInterval(() => {
  if (header.classList.contains("sliderImg01")) {
    changeBackgroundImg("sliderImg02");
    focusSliderColor(slider02);

    // Todo create function for headerTitle
    headerTitle01.classList.replace("open", "close");
    headerTitle02.classList.replace("close", "open");
    headerTitle03.classList.replace("open", "close");
  } else if (header.classList.contains("sliderImg02")) {
    changeBackgroundImg("sliderImg03");
    focusSliderColor(slider03);

    // Todo create function for headerTitle
    headerTitle01.classList.replace("open", "close");
    headerTitle02.classList.replace("open", "close");
    headerTitle03.classList.replace("close", "open");
  } else if (header.classList.contains("sliderImg03")) {
    changeBackgroundImg("sliderImg01");
    focusSliderColor(slider01);

    // Todo create function for headerTitle
    headerTitle01.classList.replace("close", "open");
    headerTitle02.classList.replace("open", "close");
    headerTitle03.classList.replace("open", "close");
  } else {
    console.log("Doesn't work sliders");
  }
}, 8000);
