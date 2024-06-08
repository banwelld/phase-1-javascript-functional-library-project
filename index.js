const isObj = data => typeof data === 'object' && data !== null && ! Array.isArray(data);
const dataArr = data => isObj(data) ? myValues(data) : data;
const noArg = arg => arg === undefined;
const arrLen = arr => arr.length;

const myEach = function(data, func) {
    for (let item of dataArr(data)) func(item);
    return data;
}

const myMap = function(data, func) {
    const mapArr = [];
    for (let item of dataArr(data)) mapArr.push(func(item));
    return mapArr;
}

const myReduce = function(data, func, acc) {
  let runAccum = noArg(acc) ? dataArr(data)[0] : acc;
  for (let i = noArg(acc) ? 1 : 0; i < arrLen(dataArr(data)); i++) {
      runAccum = func(runAccum, dataArr(data)[i]);
  }
  return runAccum;
}

const myFind = function(data, predicate) {
  for (let item of dataArr(data))
    if (predicate(item)) return item;
  return undefined;
}

const myFilter = function(data, predicate) {
    const filterArr = [];
    for (let item of dataArr(data))
      if (predicate(item)) filterArr.push(item);
    return filterArr;
}

const mySize = data => arrLen(dataArr(data));

const myFirst = (data, n) => noArg(n) ? data[0] : data.slice(0, n);

const myLast = (data, n) => noArg(n) ? data[arrLen(data) - 1] : data.slice(arrLen(data) - n);

const myKeys = function(data) {
    const keyArr = [];
    for (let key in data) keyArr.push(key);
    return keyArr;
}

const myValues = function(data) {
    const valArr = [];
    for (let key in data) valArr.push(data[key]);
    return valArr;
}