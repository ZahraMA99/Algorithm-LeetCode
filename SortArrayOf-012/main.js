let sortedArray = [];

let sortArrayOf012 = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      counter0++;
    } else if (array[i] == 1) {
      counter1++;
    } else if (array[i] == 2) {
      counter2++;
    }
  }
  i = 0;

  while (counter0 > 0) {
    array[i++] = 0;
    counter0--;
  }

  while (counter1 > 0) {
    array[i++] = 1;
    counter1--;
  }

  while (counter2 > 0) {
    array[i++] = 2;
    counter2--;
  }
  console.log("sorted array:[" + array + "]");
};

let array = [2, 0, 1, 2, 0, 1];
sortArrayOf012(array);
