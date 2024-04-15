const container = document.querySelector("#container");

const red_para = document.createElement("p");
red_para.textContent = "Hey I'm red!";
red_para.setAttribute("style", "color: red;");
container.appendChild(red_para);

const blue_header = document.createElement("h3");
blue_header.textContent = "I'm a blue h3";
blue_header.setAttribute("style", "color:blue;");
container.appendChild(blue_header);

const section_div = document.createElement("div");
section_div.setAttribute("style", "border:solid black; background-color:pink");
const header_1 = document.createElement("h1");
header_1.textContent = "I'm in a div";
section_div.appendChild(header_1);
const section_para = document.createElement("p");
section_para.textContent = "ME TOO!";
section_div.appendChild(section_para);
container.appendChild(section_div);

const button = document.createElement("button");
button.classList.add("special-button");
button.textContent = "Click me!";
container.appendChild(button);
button.addEventListener("click", () => {
  alert("Hello, world!");
});

function alertFunction() {
  alert("ALERT!!!");
}
button.addEventListener("click", alertFunction);

button.addEventListener("mouseenter", function (e) {
  console.log(e.target);
  e.target.setAttribute("style", "color:#FFF; background-color:blue");
});

for (i = 1; i < 4; i++) {
  const button = document.createElement("button");
  button.classList.add(`button`);
  button.setAttribute(`id`, `button${i}`);
  button.textContent = `Click me ${i}`;
  container.appendChild(button);
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(`Button id : ${button.id}`);
  });
});
