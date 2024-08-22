// Selecting all buttons on the page
const buttonsEl = document.querySelectorAll("button");
// buttonsEl now holds a NodeList of all the button elements

// Selecting the input field where the result will be displayed
const inputField = document.querySelector("#result");
// inputField is now the reference to the input field with id "result"

// Loop through each button in the NodeList
for (let i = 0; i < buttonsEl.length; i++) {
    // Add a click event listener to each button
    buttonsEl[i].addEventListener("click", () => {
        // Get the text content of the button that was clicked
        const btnValue = buttonsEl[i].textContent;

        // Check if the button clicked is "C" (Clear button)
        if (btnValue === "C") {
            clearResult(); // Call the function to clear the input field
        }
        // Check if the button clicked is "=" (Equals button)
        else if (btnValue === "=") {
            calculateResult(); // Call the function to evaluate and display the result
        }
        // For any other button (numbers or operators)
        else {
            appendValue(btnValue); // Call the function to append the button value to the input field
        }
    });
}

// Function to clear the input field
function clearResult() {
    inputField.value = ""; // Set the value of inputField to an empty string
}

// Function to calculate and display the result
function calculateResult() {
    inputField.value = eval(inputField.value); // Evaluate the expression in inputField and set it as the new value
}

// Function to append a button's value to the input field
function appendValue(btnValue) {
    inputField.value += btnValue; // Concatenate the button's value to the current value of the input field
    // inputField.value = inputField.value + btnValue; // (This is an alternative way to do the same thing)
}