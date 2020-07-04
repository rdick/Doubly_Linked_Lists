class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.previous = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (this.length === 0) return undefined

        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.previous
            poppedNode.previous = null

            this.tail.next = null
        }

        this.length--
        return poppedNode
    }
    shift() {
        if (this.length === 0) return undefined

        let shiftedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shiftedNode.next
            shiftedNode.next = null
            this.head.previous = null
        }

        this.length--
        return shiftedNode
    }
    unshift(val) {
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this

    }
    get(index) {
        if (index < 0 || index >= this.length) return null

        let count, node
        if (index <= this.length / 2) {
            count = 0
            node = this.head

            while (count != index) {
                node = node.next
                count++
            }

        } else {
            count = this.length - 1
            node = this.tail

            while (count != index) {
                node.previous
                count--
            }
        }
        return node
    }
    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode != null) {
            foundNode.val = val
            return true
        }
        return false
    }
}

let list = new DoublyLinkedList

list.push(1)
list.push(2)
list.push(3)
list.shift()
list.unshift(0)
list.get(2)
list.set(2, 4)
// list.pop()