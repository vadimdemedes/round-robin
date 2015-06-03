'use strict';

/**
 * Expose round-robin
 */

module.exports = roundrobin;


/**
 * Round-robin
 */

function roundrobin (arr) {
  var length = arr.length;
  var index = 0;
  
  return function () {
    if (index >= length) index = 0;
    
    return arr[index++];
  };
};
