const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

const foo = (obj) => {
  if (typeof obj.left === "number") {
    obj.left = Math.abs(obj.left - 1);
  } else {
    foo(obj.left);
  }

  if (typeof obj.right === "number") {
    obj.right = Math.abs(obj.right - 1);
  } else {
    foo(obj.right);
  }
};

foo(d);
// console.log(d)
console.log(JSON.stringify(d)); // without stringify nested values displays as "[Object]"
