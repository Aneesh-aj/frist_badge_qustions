// setTimeoutExample.js

// let timeoutCounter = 0;

// function timeoutFunction() {
//   console.log("Timeout after 2 seconds");
//   timeoutCounter++;
//   if (timeoutCounter < 3) {
//     setTimeout(timeoutFunction, 2000);
//   }
// }

// setTimeout(timeoutFunction, 2000);

// let x = 10; // Outer variable

// function foo() {
//     let x = 20; // Inner variable (shadows the outer variable)
//     console.log(x); // Outputs: 20
// }

// foo();
// console.log(x); // Outputs: 10 (outer variable is not affected)


// var b=100


// {
//   var  b=20
//   console.log(b)
// }

// console.log(b)

// setTimeout example
// console.log('Before setTimeout');
// setTimeout(() => {
//   console.log('Inside setTimeout (after 1000ms)');
// }, 3000);
// console.log('After setTimeout');

// setInterval example
// let intervalCount = 0;
// const intervalId = setInterval(() => {
//   intervalCount++;
//   console.log(`Inside setInterval (iteration ${intervalCount})`);
//   if (intervalCount === 3) {
//     clearInterval(intervalId);
//     console.log('Interval stopped');
//   }
// }, 3000);

// setImmediate example
console.log('Before setImmediate');
setImmediate(() => {
  console.log('Inside setImmediate');
});
console.log('After setImmediate');
