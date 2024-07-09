const test = [
  { a: 21, b: 10 },
  { a: 7, b: 3 },
  { a: 6, b: 8 },
];
const filtered = test.filter((val) => {
  return val.a < 10 && val.b < 10;
});

const a = [1, 2, 3, 4, 5];

const rotateArray = (totalRotate, arr) => {
  const result = arr;
  for (let i = 0; i < arr.length; i++) {
    result[i] = result[i + 2 - 1];
  }
  console.log(result);
};

rotateArray(4, a);
