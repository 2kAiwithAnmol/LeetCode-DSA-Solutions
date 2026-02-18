/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;          // maximum number of items allowed
    this.map = new Map();              // stores key -> node for O(1) access
    
    // create dummy head and tail
    this.head = new Node();
    this.tail = new Node();
    
    // connect head and tail together
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * Get value by key
 * If found → move it to front (most recently used)
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;  // key not found
    
    const node = this.map.get(key);
    
    // remove from current position
    this._remove(node);
    
    // move to front (most recently used)
    this._add(node);
    
    return node.value;
};

/** 
 * Insert or update key-value pair
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        // key already exists → update value
        const node = this.map.get(key);
        node.value = value;
        
        // move it to front
        this._remove(node);
        this._add(node);
    } else {
        // if cache is full → remove least recently used (back of list)
        if (this.map.size === this.capacity) {
            const lru = this.tail.prev;   // node before tail is LRU
            this._remove(lru);
            this.map.delete(lru.key);     // remove from map
        }
        
        // create new node
        const newNode = new Node(key, value);
        
        // add to front (most recently used)
        this._add(newNode);
        
        // store in map
        this.map.set(key, newNode);
    }
};

/**
 * Add node right after head (front of list)
 * This makes it most recently used
 */
LRUCache.prototype._add = function(node) {
    node.next = this.head.next;   // point to current first node
    node.prev = this.head;        // previous becomes head
    
    this.head.next.prev = node;   // old first node points back to new node
    this.head.next = node;        // head now points to new node
};

/**
 * Remove node from linked list
 */
LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;   // connect previous to next
    node.next.prev = node.prev;   // connect next back to previous
};

/**
 * Node structure for doubly linked list
 */
class Node {
    constructor(key = null, value = null) {
        this.key = key;       // store key (needed for deletion from map)
        this.value = value;   // store value
        this.prev = null;     // pointer to previous node
        this.next = null;     // pointer to next node
    }
}
