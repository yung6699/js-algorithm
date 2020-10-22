function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

console.log(bubbleSort([6, 8, 3, 9, 10, 1, 2, 4, 7, 5]));
console.log(bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]));
