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
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
        let newNode = new Node(val)

        prevNode.next = newNode, newNode.previous = prevNode

        nextNode.previous = newNode, newNode.next = nextNode

        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()

        let removedNode = this.get(index)
        let prevNode = removedNode.previous
        let nextNode = removedNode.next


        prevNode.next = nextNode, nextNode.previous = prevNode

        removedNode.next = null, removedNode.previous = null

        this.length--
        return removedNode
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
list.insert(1, 'dog?')
list.remove(1)
// list.pop()