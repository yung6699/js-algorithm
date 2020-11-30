function rangeSumBST (root, low, high) {
  const _root = [ null, ...root];
  const result = [];

  function inorder (root, key) {
    if (!root[key]) return;
    inorder(root, key * 2);
    if (root[key] >= low && root[key] <= high) result.push(root[key]);
    inorder(root, key * 2 + 1);
  }

  inorder(_root, 1);
  return result.reduce((acc, val) => acc + val, 0);
};

const root = [10,5,15,3,7,null,18], low = 7, high = 15
console.log(rangeSumBST(root, low, high))
