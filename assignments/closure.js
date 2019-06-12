// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

var theNumber = "not a number"

function callTheNumber () {

  return theNumber + " but it is"
}

console.log(callTheNumber());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (count = 0) =>  increment = () => {
  {
    count++;
    return count;
  }
};
const newCount = counter();

 console.log(newCount());
 console.log(newCount());

  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => objectFunction = {
  count: 0,

  increment: function() {
    objectFunction.count++
    return objectFunction.count;
  },
  decrement: function() {
    objectFunction.count--
    return objectFunction.count;
  }
};

 const counter2 = counterFactory();

 console.log(counter2.increment());
console.log(counter2.decrement());
