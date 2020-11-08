function rabinKarp(text, word) {
  const textHash = [];
  const wordHash = [];
  const result = [];

  for (let i = 0; i < text.length; i++) {
    // 처음 시작할 때 Hash 배열에 text와 word를 word의 길이만큼 넣어줍니다.
    const isFirst = i === 0;
    if (isFirst) {
      for (let j = 0; j < word.length; j++) {
        textHash.push(text[j]);
        wordHash.push(word[j]);
      }
    }

    // 다음 반복 부터는 text 배열의 맨 앞 한 글자를 빼주고 배열 맨 뒤에 다음 글자를 넣어줍니다.
    if (!isFirst) {
      textHash.shift();
      textHash.push(text[i + word.length - 1]);
    }

    // 만약 두 배열이 같다면 현재 위치를 return하고 함수는 종료됩니다.
    if (textHash.join("") === wordHash.join("")) result.push(i);
  }

  // text의 길이만큼 반복했을 때도 찾지 못 했다면 -1을 return해 실패를 알립니다.
  return (result.length) ? result : -1;
}

console.log(rabinKarp("asdfaaeeeesdfasfasdfasdfasdfadsfaeeee", "aeeee"));
console.log(rabinKarp("asdfasdfasfasdfasdfasdfadsfaeeee", "aeeee"));
console.log(rabinKarp("asdfasdfasfasdfasdfasdfadsfaeeee", "asdf"));
