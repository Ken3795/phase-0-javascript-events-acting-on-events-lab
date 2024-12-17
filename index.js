// Grab the Dodger element
const dodger = document.getElementById("dodger");

// Ensure dodger starts at a known position
dodger.style.left = "0px"; // Explicitly set initial left position

// Function to move the Dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Remove 'px'
  const left = parseInt(leftNumbers, 10); // Parse as an integer

  // Prevent moving past the left edge
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the Dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Remove 'px'
  const left = parseInt(leftNumbers, 10); // Parse as an integer

  // Prevent moving past the right edge (game width 400px, dodger width 40px)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown events
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

