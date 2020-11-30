function solution (tree) {
  // const inVisit = [];
  // const postVisit = [];

  function preorder (tree) {
    const preVisit = [];
    const stack = [ tree[1] ];
    while(stack.length) {
      const node = stack.pop();
      if (node) {
        preVisit.push(node);
        if (tree[key * 2]) stack.push(tree[key * 2]);
        if (tree[key * 2 + 1]) stack.push(tree[key * 2 + 1]);
      }
    }

    return preVisit;
  }

  function inorder (tree, key) {

  }

  function postorder (tree, key) {

  }

  // inorder(tree, 1);
  // postorder(tree, 1);

  console.log('전위 순회', preorder(tree));
  // console.log('중위 순회', inVisit);
  // console.log('후위 순회', postVisit);
}

// const array = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
// const array = [null, 1, 2, 3, 4, 5, 6];
const array = [null, 3, 9, 20, null, null, 15, 7];
solution(array);
