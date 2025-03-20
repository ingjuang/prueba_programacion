import ITreeNode from "./ITreeNode";

const tree: ITreeNode = {
    value: 0,
    branches: [ 
        { value: 5, branches: [ { value: 2 }, { value: 4, branches: [{ value: 3, branches: [{ value: 2 }, { value: 1 }] }] } ] },
        { value: 10, branches: [
            { value: 2, branches: [{ value: 4 }, { value: 2, branches: [{ value: 2, branches: [{ value: 1 }, { value: 5 }] }] }] },
            { value: 4, branches: [{ value: 2, branches: [{ value: 1 }, { value: 23 }] }] }
        ] }
    ]
};

export default tree;