let today;
today = new Date();

let thisYear;
thisYear = today.getFullYear();

var footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = "Ramya " + thisYear;
footer.appendChild(copyright);
const skills = [
  "c",
  "c++",
  "javascript",
  "manual testing",
  "selnium",
  "API testing",
  "sql",
  "HTML",
];
const skillsSection = document.getElementById("skills");
console.log(skillsSection);
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
