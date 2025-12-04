//your JS code here. If required.
// Utility function to simulate delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function showMessage() {
  // Get input values
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;

  // Reference to output div
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "";

  // If inputs are empty, do nothing
  if (!text || !delay) {
    outputDiv.textContent = "⚠️ Please enter both text and delay.";
    return;
  }

  // Await the delay
  await wait(Number(delay));

  // Display the message after delay
  outputDiv.textContent = text;
}

// Attach event listener to button
document.getElementById("btn").addEventListener("click", showMessage);
