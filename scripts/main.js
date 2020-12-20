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
});

// Click back-end
selectBackSkills.addEventListener("click", () => {
  frontEndSkills.classList.replace("open", "close");
  backEndSkills.classList.replace("close", "open");
  databaseSkills.classList.replace("open", "close");
});

// Click database
selectDatabaseSkills.addEventListener("click", () => {
  frontEndSkills.classList.replace("open", "close");
  backEndSkills.classList.replace("open", "close");
  databaseSkills.classList.replace("close", "open");
});
