// Event emitter: the button element
const button = document.getElementById('myButton');

// Event listener: listens for click event on the button
button.addEventListener('click', function(event) {
  // Event handler: responds to the click event
  console.log('Button clicked!');
});

// Another event listener for demonstration
button.addEventListener('mouseover', function(event) {
  console.log('Mouse over the button!');
});
