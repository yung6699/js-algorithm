function solution (tree) {
  const preVisit = [];
  const inVisit = [];
  const postVisit = [];

  function preorder (tree, key) {
    if (!tree[key]) return;
    preVisit.push({ key, value: tree[key] });
    preorder(tree, key * 2);
    preorder(tree, key * 2 + 1);
  }

  function inorder (tree, key) {
    if (!tree[key]) return;
    inorder(tree, key * 2);
    inVisit.push({ key, value: tree[key] });
    inorder(tree, key * 2 + 1);
  }

  function postorder (tree, key) {
    if (!tree[key]) return;
    postorder(tree, key * 2);
    postorder(tree, key * 2 + 1);
    postVisit.push({ key, value: tree[key] });
  }

  preorder(tree, 1);
  inorder(tree, 1);
  postorder(tree, 1);

  console.log('전위 순회', preVisit);
  console.log('중위 순회', inVisit);
  console.log('후위 순회', postVisit);
}

// const array = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
const array = [null, 1, 2, 3, 4, 5, 6];
solution(array);
