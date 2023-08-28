function doubleBubbleSort(arr) {
  const array = [...arr];
  let temp = 0;
  let keepGoingR = true;
  let keepGoingL = true;
  let swapped = false;
  let length = array.length;

  for (let x = 0; x <= length / 4 + 1 && (keepGoingR || keepGoingL); x++) {
    for (let i = x; i < length - 1 && keepGoingR; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
    keepGoingR = swapped;
    swapped = false;
    for (let i = length - 1 - x - 1; i > 0 && keepGoingL; i--) {
      if (array[i] < array[i - 1]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        swapped = true;
      }
    }
    keepGoingL = swapped;
    swapped = false;
  }
  return array;
}

// Test:
const array1 = [8, 345, 123, 32, 5643, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 432, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 25, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 9654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 3, 643, 6, 123, 43, 2, 98764, 55, 1, 234, 92, 1, 4, 2, 8, 345, 13, 43, 1, 4, 2, 8, 345, 123, 123, 43, 343, 63, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 12, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 85, 123, 123, 43, 32, 5643, 63, 123];
// const areEqual = (firstArray, secondArray) => JSON.stringify(firstArray) === JSON.stringify(secondArray);
console.log(
  doubleBubbleSort(array1).toString()
  ===
  array1.sort((a, b) => a - b).toString()
);
// outputs true
