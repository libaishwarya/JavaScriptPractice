// function showTime() {
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
//      setTimeout(showTime, 3000);
// }
// showTime();

// This program runs indefinitely (until the memory runs out)



function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000);
sayName('John');