const buildCalc = () => {
  const operations = {
    "-": (a, b) => {
      return a - b;
    },
    "+": (a, b) => {
      return a + b;
    },
    "*": (a, b) => {
      return a * b;
    },
    "/": (a, b) => {
      return a / b;
    },
  };
  let result = 0;

  return (value, operation) => {
    if (!value || !operation || !operations[operation]) return "Invalid data";
    if (operation === "/" && value === 0)
      return "Unable to resolve calculation (divide by 0)";

    const currOperation = operations[operation];
    result = currOperation(result, value);
    console.log(result);
    return result;
  };
};
const calc = buildCalc();
calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
