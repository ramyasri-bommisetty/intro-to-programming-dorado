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

const btn = document.getElementById("Submit");
const messageDisplay = document.getElementById("messagebox");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("first_name").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("textarea").value;

  const message = document.createElement("li");
  const link = document.createElement("a");
  const span = document.createElement("span");
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "remove";
  removeBtn.setAttribute("type", "button");
  removeBtn.addEventListener("click", function () {
    messageDisplay.removeChild(message);
  });
  span.innerHTML = ` wrote ${textarea} `;
  link.href = email;
  link.innerHTML = firstName;

  message.append(link);
  message.append(span);
  message.append(removeBtn);
  messageDisplay.append(message);

  //const messageForm = document.getElementById("leave_message");
});
