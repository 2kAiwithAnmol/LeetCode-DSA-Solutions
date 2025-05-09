var MyHashSet = function() {
    this.set = new Array(1000001).fill(false);  // Create a boolean array of size 10^6 + 1, initialized with false
};

MyHashSet.prototype.add = function(key) {
    this.set[key] = true;  // Mark the key as present in the set
};

MyHashSet.prototype.remove = function(key) {
    this.set[key] = false; // Mark the key as not present 
};

MyHashSet.prototype.contains = function(key) {
    return this.set[key]; // Return true if key is present, false otherwise
};
