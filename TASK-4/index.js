import { setRandColor } from "./heplers/colorGenerator.js";

const items = document.querySelectorAll(".item");

const handleClick = () => {
  let count = 0;

  return function () {
    count += 1;
    setRandColor(this);
    this.innerHTML = `<span>${count}</span>`;
  };
};

items.forEach((item) => {
  const handler = handleClick();
  setRandColor(item);
  item.addEventListener("click", handler);
});
