export function counter(array) {
  // const count = {};
  // array.forEach(val => count[val] = (count[val] || 0) + 1);
  // return count;
  return array.reduce((countHash, val) => {
    countHash[val] = (countHash[val] || 0) + 1;
    return countHash;
  }, {})

}

export function removeEmptyValue(array) {
  return array.filter(function (e) {
    return e === 0 || e
  });
}

export function removeValueFromArray(array, removedValue) {
  const _array = [...array];
  _array.splice(_array.indexOf(removedValue), 1);
  return _array;
}

export function isNumeric(num) {
  return !isNaN(num)
}

// 최대값 구하기
export function searchMax(array) {
  return array.reduce((previous, current) => {
    return previous > current ? previous : current;
  });
}

// 최대값 구하기
export function searchMin(array) {
  return array.reduce((previous, current) => {
    return previous > current ? previous : current;
  });
}


// S: "1A 3C 2B 40G 5A"
// { '1': [ 'A' ], '2': [ 'B' ], '3': [ 'C' ], '5': [ 'A' ], '40': [ 'G' ] }
export function splitWordNumberAndChar(S) {
  const arr = S.split(' ');
  const seats = {};

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i].slice(0, -1); // 맨 뒤를 제외하고 첫번째까지 반환
    const seatName = arr[i].slice(-1); // 맨 뒤 값을 반환

    if (!seats[number]) seats[number] = [];
    seats[number].push(seatName);
  }

  return seats;
}

export const isLeapYear = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

export const getEndDays = (currentYear) => {
  const copiedMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isLeapYear(currentYear)) copiedMonths[1] = 29;
  return [...copiedMonths];
};

export const getFirstDayIndexOfWeek = (year, month) => {
  const endDays = getEndDays(year);
  const prevYear = year - 1;
  let days = prevYear * 365 + Math.floor(prevYear / 4) - Math.floor(prevYear / 100) + Math.floor(prevYear / 400);
  for (let i = 0; i < month - 1; i++) days += endDays[i];
  days += 1;

  return days % 7;
};


export const getDayRows = (year, month) => {
  const endDays = getEndDays(year);
  const lastDay = endDays[month - 1];
  const firstDayIndexOfWeek = getFirstDayIndexOfWeek(year, month); // 선택된 달의 1일의 요일을 찾는다.
  const days = new Array(42).fill(null);

  for (let i = firstDayIndexOfWeek; i < lastDay + firstDayIndexOfWeek; i++) {
    days[i] = i - firstDayIndexOfWeek + 1;
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    const start = i * 7;
    const end = start + 7;
    const row = days.slice(start, end);
    rows.push(row);
  }

  return rows;
};



export function splitStringInThree(string) {
  if (string.length <= 3) return string.split('');
  
  const remainder = string.length % 3;
  const divisor = Math.floor(string.length / 3);
  
  const sep1 = remainder === 2 || remainder === 1 ? 1 : 0;
  const sep2 = remainder === 1 || remainder === 0 ? 0 : 1;
  
  const string1 = string.slice(0, divisor + sep1);
  const string2 = string.slice(divisor + sep1, (divisor * 2) + sep1 + sep2);
  const string3 = string.slice((divisor * 2) + sep1 + sep2);
  
  return [string1, string2, string3];
}

function splitChunks(string) {
  var regex = RegExp(".{1,"+Math.ceil(string.length/3)+"}", 'g');
  return string.match(regex);
}