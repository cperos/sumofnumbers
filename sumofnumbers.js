function sumFor(sumList) {
  let sum = 0;

  for (let i = 0; i < sumList.length; i++) {
    sum += sumList[i];
  }
  return sum;
}

function sumWhile(sumList) {
  let sum = 0;
  let i = 0;
  while (i < sumList.length) {
    sum += sumList[i];
    i++;
  }
  return sum;
}

function sumRecursion(sumList) {
  if (sumList.length === 1) return sumList[0]; // base case
  return sumList[0] + sumRecursion(sumList.slice(1)); // recurse
}

function sumTheSimpleWay(sumList) {
  const sum = _.reduce(sumList, function (memo, num) { return memo + num; }, 0);
  return sum;
}

const array = [1, 2, 3, 4];

console.log(`Sum For ${sumFor(array)}`);
console.log(`Sum While ${sumWhile(array)}`);
console.log(`Sum Recursive ${sumRecursion(array)}`);
console.log(`Sum Simple ${sumTheSimpleWay(array)}`);
