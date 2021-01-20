// JavaScript is a synchronous language with some asynchronous behaviours

// function getFirstElementOfArray(array) {
//     return array[0];
// }
// const array = ["Madrid", "Barcelona", "Miami"];
// const firstElement = getFirstElementOfArray(array);
// console.log(firstElement); // <== Madrid

// function readFile(file) {
//     // read the file - or some other expensive operation
//     return contentFile.length;
// }

// const textSize = readFile("odyssey.txt");
// console.log(textSize); // => undefined

// function someCallbackFunction() {
//     console.log('Hey Ironhackers 🙃');
// }

// console.log('runs first ⏰');
// const timeoutId = setTimeout(function () {
//     console.log('Hey Ironhackers 🙃');
// }, 3000);
// setTimeout(function () {
//     console.log('Hey People 🙃');
// }, 3000);
// clearTimeout(timeoutId);
// console.log('runs second ⏰');

// change that code so that the setTimeout get's stopped if we counted to 5
// let counter = 1;
// function callbackFunction() {
//     console.log(counter);
//     timeoutId = setTimeout(callbackFunction, 1000);

//     counter += 1;
//     if (counter > 5) {
//         clearTimeout(timeoutId);
//     }
// }

// let timeoutId = setTimeout(callbackFunction, 1000);

let i = 1;
const id = setInterval(function () {
    console.log(i);
    i++
    if (i > 3) {
        clearInterval(id);
    }
}, 1000)