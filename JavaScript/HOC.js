const add = (a, b) => {
  return a + b;
};

const higherOrder = (a, referenceFunction) => {
  return referenceFunction(a, 20);
};

console.log(higherOrder(30, add));
