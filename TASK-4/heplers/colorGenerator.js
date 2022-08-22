export const setRandColor = (elem) => {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);

  elem.style.background =
    "#" + r.toString(16) + g.toString(16) + b.toString(16);
};
