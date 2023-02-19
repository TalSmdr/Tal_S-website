const messageInput = document.getElementById("message");

messageInput.addEventListener("input", function() {
  const messageLength = messageInput.value.length;
  const maxLength = 400;

  if (messageLength > maxLength) {
    messageInput.value = messageInput.value.slice(0, maxLength);
  }
});

// Select the arrow element
const arrow = document.querySelector('.arrow-down');

// Add a click event listener to the arrow element
arrow.addEventListener('click', function(e) {
  e.preventDefault();
  // Select the target element to scroll to
  const target = document.querySelector(this.getAttribute('href'));
  // Calculate the distance to scroll
  const offset = target.offsetTop - 100;
  // Scroll to the target element
  window.scroll({
    top: offset,
    behavior: 'smooth'
  });
});

