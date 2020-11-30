class Node {
  constructor(value = '') {
    this.value = value; //현재 경로까지의 누적값
    this.hasWord = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {} //자식
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let node = this.root; //루트노드를 시작으로 탐색하면서 삽입한다
    for (let char of string) {
      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (!node.child[char]) node.child[char] = new Node(node.value + char);
      node = node.child[char]
    }
    node.hasWord = true;
  }

  search(string, node) {
    if (!node) node = this.root; //역시나 시작은 루트
    for (let char of string) {
      if (char === '?') return node;
      if (!node.child[char]) return false;
      node = node.child[char]; // 있으면 노드 이동
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것.
    return node;
  }
}

function allSeachWord (startNode, store) {
  const child = startNode.child;
  for (let char in child) {
    const node = child[char];
    if (node.hasWord) {
      store.push(node.value);
      continue;
    }
    allSeachWord(node, store);
  }
  return store;
}

const myTrie = new Trie();
const list = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
list.forEach(item => myTrie.insert(item));

const result = myTrie.search("fro");


console.log(result) // 찾아야함
console.log(allSeachWord(result, [])) // 찾아야함
console.log(myTrie.search("front")) // 찾아야함
