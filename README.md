# New-Array-Bubble-Sort-Algorithm
A new sorting algorithm that sorts starting from both ends of the array

## Performance comparison with bubbleSort on https://jsbench.me/
![Compare](https://github.com/Rami24t/New-Array-Bubble-Sort-Algorithm/assets/103028944/5acf80dc-ef7d-49eb-8918-7ce09b161398)


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
}
