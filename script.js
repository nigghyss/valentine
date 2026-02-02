const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let scale = 1;

const noTexts = [
  "Are you sure?..",
  "cmon...",
  "im gonna cry...",
  "you want me death... ",
  "You are talking to your husband soul now"
];

let index = 0;

noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  noBtn.textContent = noTexts[index % noTexts.length];
  index++;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1> YAYYYYYYYY</h1>";
});
