const convertInchesToFoot = (x) => {
  return x / 12;
};

console.log(convertInchesToFoot(40));

const demoArray = [4, 6, 9, 3];

const checkLargeNum = (arr) => {
  let largestNumber = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
};

console.log(checkLargeNum(demoArray));

(function () {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();
