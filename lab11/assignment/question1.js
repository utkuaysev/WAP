Array.prototype.even = function() {
    return this.filter(function(item) {
      return item % 2 === 0;
    });
  };
  
  Array.prototype.even = function() {
    return this.filter(x => x % 2 == 0)
  };


  Array.prototype.odd = function() {
    return this.filter(x => x % 2 == 1)
  };
  
  // Test your code
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  
  console.log(arr.even()); // [2, 4, 6, 8]
  console.log(arr.odd()); // [1, 3, 5, 7]
  