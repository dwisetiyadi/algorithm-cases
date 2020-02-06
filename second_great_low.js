const solution = (array) => {
  if (array.length === 2) {
    array.sort((a, b) => a - b);
    return `${array[1]} ${array[0]}`;
  }
    
  let uniqArray = array.filter((item, pos) => {
    return array.indexOf(item) === pos;
  });
    
  if (uniqArray.length > 2) {
    uniqArray.sort((a, b) => a - b);
    return `${uniqArray[1]} ${uniqArray[uniqArray.length - 2]}`;
  } else {
    return `${uniqArray[1]} ${uniqArray[0]}`;
  }
};

const test = [7, 7, 12, 98, 106];
console.log('result: ', solution(test));
