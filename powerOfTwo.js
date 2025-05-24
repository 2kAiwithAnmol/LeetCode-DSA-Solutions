var isPowerOfTwo = function(n) {
   return (n > 0 && (n & n - 1) === 0)  // Returns true if n is a power of two
};