const selectFrontSkills = document.getElementById("selectFrontSkills");
const selectBackSkills = document.getElementById("selectBackSkills");
const selectDatabaseSkills = document.getElementById("selectDatabaseSkills");

const frontEndSkills = document.getElementById("frontEndSkills");
const backEndSkills = document.getElementById("backEndSkills");
const databaseSkills = document.getElementById("databaseSkills");

// Click front-end
selectFrontSkills.addEventListener("click", () => {
  frontEndSkills.classList.replace("close", "open");
  backEndSkills.classList.replace("open", "close");
  databaseSkills.classList.replace("open", "close");

  // Focus color
  selectFrontSkills.classList.add("focus");
  selectBackSkills.classList.remove("focus");
  selectDatabaseSkills.classList.remove("focus");
});

// Click back-end
selectBackSkills.addEventListener("click", () => {
  frontEndSkills.classList.replace("open", "close");
  backEndSkills.classList.replace("close", "open");
  databaseSkills.classList.replace("open", "close");

  // Focus color
  selectFrontSkills.classList.remove("focus");
  selectBackSkills.classList.add("focus");
  selectDatabaseSkills.classList.remove("focus");
});

// Click database
selectDatabaseSkills.addEventListener("click", () => {
  frontEndSkills.classList.replace("open", "close");
  backEndSkills.classList.replace("open", "close");
  databaseSkills.classList.replace("close", "open");

  // Focus color
  selectFrontSkills.classList.remove("focus");
  selectBackSkills.classList.remove("focus");
  selectDatabaseSkills.classList.add("focus");
});
