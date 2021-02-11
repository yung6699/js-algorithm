function quickSort(list) {
    const length = list.length;
    if (length <= 1) return list;

    const mid = Math.floor(list.length / 2);
    const pivot = list[mid]; // 편의상 마지막 값을 pivot으로 지정
    const left = [];
    const right = [];

    for (let i = 0; i < length; i++) {
        const num = list[i];
        if (i === mid) continue; // piviot 제외
        (num < pivot) ? left.push(num) : right.push(num);
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [6, 8, 3, 9, 10, 1, 2, 4, 7, 10, 5];
const arr2 = [1233, 5, 7, 3129, 1, 2, 434, 6, 8, 0];
const arr3 = [1, 2, 3, 4, 5, 6];
console.log(quickSort(arr));
console.log(quickSort(arr2));
console.log(quickSort(arr3));
