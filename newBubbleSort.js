function ramiBubbleSort(arr) {
  const array = [...arr];
  let temp = 0;
  let keepGoing1 = true;
  let keepGoing2 = true;
  let swapped = false;

  for (let x = 0; x <= array.length / 4; x++) {
    for (let i = x; i < array.length - 1 && keepGoing1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true
      }
    }
    keepGoing1 = swapped;
    swapped = false
    for (let i = array.length - 1 - x - 1; i > 0 && keepGoing2; i--) {
      if (array[i] < array[i - 1]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        swapped = true
      }
    }
    keepGoing2 = swapped;
    swapped = false;
  }
  return array;
  // Only change code above this line
}


const array1 = [99, 2, 8, 345, 123, 32, 5643, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 432, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 25, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 9654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 8, 345, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 3, 643, 6, 123, 43, 2, 98764, 55, 1, 234, 92, 1, 4, 2, 8, 345, 13, 43, 1, 4, 2, 8, 345, 123, 123, 43, 343, 63, 43, 2, 55, 1, 234, 92, 1, 4, 2, 8, 345, 43, 32, 5643, 63, 12, 2, 987654, 55, 1, 234, 92, 1, 4, 2, 8, 345, 123, 43, 1, 4, 2, 85, 123, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 1, 2, 8, 345, 43, 32, 5643, 63, 123, 43, 2, 987654, 55, 1, 234, 92];



// const areEqual = (firstArray, secondArray) => JSON.stringify(firstArray) === JSON.stringify(secondArray);
console.log(
  ramiBubbleSort(array1).toString()
  ===
  array1.sort((a, b) => a - b).toString()
);
// outputs true
