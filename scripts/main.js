const selectFrontSkills = document.getElementById("selectFrontSkills");
const selectBackSkills = document.getElementById("selectBackSkills");
const selectDatabaseSkills = document.getElementById("selectDatabaseSkills");

const frontEndSkills = document.getElementById("frontEndSkills");
const backEndSkills = document.getElementById("backEndSkills");
const databaseSkills = document.getElementById("databaseSkills");

const selectSkills = [
  selectFrontSkills,
  selectBackSkills,
  selectDatabaseSkills,
];

const skills = [frontEndSkills, backEndSkills, databaseSkills];

// For show slill
const showSkill = (targetSkill) => {
  skills.forEach((el) => {
    if (el === targetSkill) {
      el.classList.replace("close", "open");
    } else {
      el.classList.replace("open", "close");
    }
  });
};

// For Focus color (Todo: Merge the same function in header to global)
const focusColor = (targetText) => {
  selectSkills.forEach((el) => {
    if (el === targetText) {
      el.classList.add("focus");
    } else {
      el.classList.remove("focus");
    }
  });
};

// Click front-end
selectFrontSkills.addEventListener("click", () => {
  showSkill(frontEndSkills);
  focusColor(selectFrontSkills);
});

// Click back-end
selectBackSkills.addEventListener("click", () => {
  showSkill(backEndSkills);
  focusColor(selectBackSkills);
});

// Click database
selectDatabaseSkills.addEventListener("click", () => {
  showSkill(databaseSkills);
  focusColor(selectDatabaseSkills);
});
