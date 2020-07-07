//EXAMPLE 1

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.previous = null;
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
            let oldtail = this.tail
            oldtail.next = newNode
            this.tail = oldtail.next
            this.tail.previous = oldtail
        }
        this.length++
        return this
    }
    pop() {
        if (this.head === null) return undefined
        let oldtail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail.previous.next = null
            this.tail = oldtail.previous
            oldtail.previous = null
        }

        this.length--
        return oldtail
    }
    unshift(val) {
        let newNode = new Node(val)
        if (this.head === null) {
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
    shift() {
        if (this.head === null) return undefined

        let oldhead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.previous = null
            oldhead.next = null
        }
        this.length--
        return oldhead
    }
    get(index) {
        if (index === 0) return this.head
        if (index === this.length - 1) return this.tail

        let count = 0
        let current = this.head
        while (index = !count) {
            current = current.next
            count++
        }
        return current
    }
    set(index, val) {
        if (index === 0) return this.head.val = val
        if (index === this.length - 1) return this.tail.val = val

        let foundNode = this.get(index)
        foundNode.val = val
        return foundNode

    }
    insert(index, val) {
        if (index === 0) return this.unshift(val)
        if (index === this.length - 1) return this.push(val)

        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
        let newNode = new Node(val)

        prevNode.next = newNode, newNode.previous = prevNode

        nextNode, newNode.next = nextNode

        return newNode

    }
    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removed = this.get(index)
        let prev = removed.previous
        let next = removed.next

        prev.next = next, next.previous = prev

        removed.next = null, removed.previous = null

        return removed
    }
    reverse() {

        // let prev = null,
        //     current = this.head,
        //     forward = this.head
        let current = this.head
        let prev

        while (current) {
            prev = current.previous //     prev1             = null
            current.previous = current.next // current.previous = tree
            current.next = prev             // current.next     = null
            current = current.previous      // current = tree
        }

        return prev.previous
    }
}

var doublyLinkedList = new DoublyLinkedList
doublyLinkedList.push(5)
doublyLinkedList.push(4)
doublyLinkedList.push(3)
doublyLinkedList.reverse()


