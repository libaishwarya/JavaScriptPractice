// Select all buttons with class "btn"
const buttons = document.querySelectorAll('.btn');

// Function to change button color
function changeColor(button) {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color
  button.style.backgroundColor = randomColor; // Change button color
}

// Event listener for each button
buttons.forEach(button => {
  button.addEventListener('click', event => {
    // Event handler: responds to the click event for each button
    changeColor(button); // Change button color when clicked
  });
});
