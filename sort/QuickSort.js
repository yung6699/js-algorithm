function quickSort(list) {
    const length = list.length;
    if (length <= 1) return list;

    const pivot = list[0]; // 편의상 마지막 값을 pivot으로 지정
    const left = [];
    const right = [];

    for (let i = 1; i < length; i++) {
        const num = list[i];
        (num < pivot) ? left.push(num) : right.push(num);
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5];
const arr2 = [1233, 5, 7, 3129, 1, 2, 434, 6, 8, 0];
console.log(quickSort(arr));
console.log(quickSort(arr2));
