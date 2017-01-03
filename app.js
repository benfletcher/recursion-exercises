'use strict';

// # 1
function oddOrEven(num) {

  if (num < 1) {
    return 'invalid input';
  }

  if (num === 1) {
    return 'odd';
  }

  if (num === 2) {
    return 'even';
  }

  return oddOrEven(num - 2);

}

// # 2
function arrayDoubler(arr) {

  if (arr.length === 1) {
    return [arr[0] * 2];
  }

  return [arr[0] * 2, ...arrayDoubler(arr.slice(1))];
}

// # 3
function stringReverse(str) {

  if (!str.length) {
    return "";
  }

  return str[str.length - 1] + stringReverse(str.slice(0, str.length - 1));

}

// # 4
function nthTriangular(n) {

  if (n === 0) {
    return 0;
  }

  return n + nthTriangular(n - 1);

}

// # 5
function stringSplit(str, separator) {

  if (!str.length) {
    return "";
  }

  return (str[0] === separator ? ',' : str[0]) +
    stringSplit(str.slice(1), separator);

}
