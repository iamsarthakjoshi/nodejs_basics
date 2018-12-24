var timer = 0;

// GLOBAL OBJECTS
/* var interval = setInterval(function(){
  timer +=2;
  console.log(timer+" sec passed");
  if(timer>5)
    clearInterval(interval);
}, 2000) */


// console.log(__dirname) //__dirname, __filename are also global objects 
// console.log(__filename)


// NORMAL FUNCTION STATEMENT
/* function sayHi(){
  console.log("hi");
}

sayHi();

function callFunction(func){
  func();
} */


// FUNCTIONS EXPRESSIONS
/* var sayBye = function(){  //function(){} is an anynomous function since it doesnt have any name 
  console.log("bye");
}

sayBye();
callFunction(sayBye); */


// MODULES
/* var counter = require('./countModule');
console.log(counter(['a','b','c']));  */


// MODULES PATTERNS
/* var stuff = require('./stuffModule');
console.log(stuff.counter(['a','b','c']));
console.log(stuff.add(2,5));
console.log(stuff.add(stuff.pi,5)); */


// THE EVENT EMITTER IN THE NODE CORE. 
// The event emitter allows us to wire up custom events to our o wn objects 
// and then emit those events at a later point in time.
/* events is a core module of Nodejs */
var eventsObj = require('events'); 
var myEmitter = new eventsObj.EventEmitter();
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});
myEmitter.emit('someEvent', 'The message is emitted.');
