import ITreeNode from "./ITreeNode";
import tree from "./treeMap";

function sumTreeLeaves(node: ITreeNode): number {
    if (!node.branches || node.branches.length === 0) {
        return node.value;
    }
    return node.branches.reduce((sum, branch) => sum + sumTreeLeaves(branch), 0);
}

console.log("Suma de las hojas:", sumTreeLeaves(tree));