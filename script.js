const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let scale = 1;

const noTexts = [
  "Sei sicuro?",
  "Daiiii 😢",
  "Pensaci meglio",
  "Non fare così 💔",
  "Ok, basta…"
];

let index = 0;

noBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  noBtn.textContent = noTexts[index % noTexts.length];
  index++;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>💖 Sapevo che avresti detto SÌ 💖</h1>";
});
