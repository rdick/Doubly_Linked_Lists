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
}

let list = new DoublyLinkedList

list.push(1)
list.push(2)
list.push(3)
list.shift()
list.unshift(0)
// list.pop()