'use strict';

/**
 * Expose round-robin
 */

module.exports = roundrobin;


/**
 * Round-robin
 */

function roundrobin (arr) {
  let length = arr.length;
  let index = 0;
  
  return function () {
    if (index >= length) index = 0;
    
    return arr[index++];
  };
};
