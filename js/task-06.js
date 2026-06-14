function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainer = document.querySelector("#controls");
const input = controlsContainer.querySelector("input");
const createBtn = controlsContainer.querySelector("[data-create]");
const destroyBtn = controlsContainer.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  // Önce mevcut koleksiyonu temizle (yeni bir tane eklenmeden önce)
  boxesContainer.innerHTML = "";

  const boxes = [];
  let size = 30; // İlk karenin boyutu

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
    size += 10; // Her sonraki kare 10px daha büyük olur
  }

  // Tek bir işlemde tüm elemanları DOM'a ekliyoruz (performans için)
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  // Değerin 1 ile 100 arasında olduğunu doğruluyoruz
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Input'u temizliyoruz
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
