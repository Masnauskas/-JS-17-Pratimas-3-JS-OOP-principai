console.log(
  (array = [1, 3, 3, 5, 5, 5, 6, 6, 10, 10, 11, 4, 1, 0, 7, 6, 20, 35, -1])
);
console.log([...new Set(array.sort((a, b) => a - b))]);
