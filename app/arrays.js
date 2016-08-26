exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
      if (i == arr.length - 1 && arr[i] !== item) return -1;
    }
  },

  sum: function(arr) {
    return arr.reduce(function(sum, current) {
      return sum + current;
    })
  },

  remove: function(arr, item) {
    var result = [];
    arr.forEach(function(elem, i) {
      if (elem !== item) {
        if (i === arr.length) result.push(arr.slice(i)[0]);
        else result.push(arr.slice(i, i + 1)[0]);
      }
    });
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    var i = 0;
    while (arr[i]) {
      if (arr[i] === item) arr.splice(i, 1);
      else i++;
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return(arr);
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(elem) {
      if (elem === item) count++;
    })
    return count;
  },

  duplicates: function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (arr.indexOf(elem) !== arr.lastIndexOf(elem)
          && result.indexOf(elem) === -1) {
        result.push(elem);
      }
    }
    return result;
  },

  square: function(arr) {
    return arr.map(function(elem) {
      return elem * elem;
    })
  },

  findAllOccurrences: function(arr, target) {
    var a = [];
    arr.forEach(function(elem, i) {
      if (elem === target) a.push(i);
    });
    return a;
  }
};

exports.arraysAnswers.removeWithoutCopy([1, 2, 3, 4], 2);
