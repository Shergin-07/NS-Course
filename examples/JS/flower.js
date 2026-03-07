const flower = document.getElementById("flower");
const PETAL_COUNT = 12;

function createPetal(angle, delayMs) {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.setProperty("--angle", `${angle}deg`);
  petal.style.animationDelay = `${delayMs}ms`;
  return petal;
}

function bloom() {
  flower.querySelectorAll(".petal").forEach((n) => n.remove());

  for (let i = 0; i < PETAL_COUNT; i += 1) {
    const angle = (360 / PETAL_COUNT) * i;
    const petal = createPetal(angle, i * 55);
    flower.insertBefore(petal, flower.firstChild);
  }

  const center = flower.querySelector(".center");
  center.style.animation = "none";
  void center.offsetWidth;
  center.style.animation = "";
}

bloom();

window.addEventListener("click", bloom);
