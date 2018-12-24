/*var counter = function(arr){
  return "This array has "+arr.length+" elements.";
}

var add = function(a,b){
  return `The sum of two nubmers is ${a+b}`;
}

var pi = 3.142;

// module.exports.counter = counter;
// module.exports.add = add;
// module.exports.pi = pi;

//USING LITERA NOTATION, WE CAN DECLARE FUNCTIONS IN MODULE.EXPORTS AS BELOW
module.exports = { 
  counter: counter,
  add: add,
  pi= pi
};
 */

// CUTTING SOME CODES
module.exports.counter = function(arr){
  return "This array has "+arr.length+" elements.";
}

module.exports.add = function(a,b){
  return `The sum of two nubmers is ${a+b}`;
}

module.exports.pi = 3.142;