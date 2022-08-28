class Node {

    constructor(val) {
        this.data = val
        this.left = null
        this.right = null
    }

}

class Bst {
    constructor() {
        this.root = null
    }

    insert(root, val) {
        if(root === null) {
            return new Node(val)
        } else if (root.data > val) {
            root.left = this.insert(root.left, val)
        } else if (root.data < val) {
            root.right = this.insert(root.right, val)
        }
        return root
    }

    inorder(root) {
        if (root != null) {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }

    preorder(root) {
        if (root != null) {
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    search(root, val) {
        if (root === null) return false
        else if (root.data === val) return true
        else if (root.data < val) return this.search(root.right, val)
        else if (root.data > val) return this.search(root.left, val)
        return false
    }
}

let bst = new Bst() 
bst.root = bst.insert(bst.root, 100)
bst.root = bst.insert(bst.root, 80)
bst.root = bst.insert(bst.root, 120)
console.log('inorder')
bst.inorder(bst.root)
console.log('preorder')
bst.preorder(bst.root)
