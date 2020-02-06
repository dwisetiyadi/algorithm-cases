const solution = (array) => {
  let sumMean = 0;
  array.forEach(el => {
    sumMean += el;
  });
  const mean = sumMean / array.length;

  const mode = Object.values(
    array.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];

  if (mean === mode) return 1;
  return 0;
};

const test = [5, 3, 3, 3, 1];
console.log('result: ', solution(test));