export function counter (array) {
  const count = {};
  array.forEach(val => count[val] = (count[val] || 0) + 1);
  return count;
}

export function removeEmptyValue (array) {
  return array.filter(function(e){ return e === 0 || e });
}

export function removeValueFromArray (array, removedValue) {
  const _array = [ ...array ];
  _array.splice(_array.indexOf(removedValue), 1);
  return _array;
}

export function isNumeric(num){
  return !isNaN(num)
}
