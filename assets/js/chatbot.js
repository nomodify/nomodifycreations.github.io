// Set up the chatbot UI elements
var chatbot = document.querySelector("#chatbot");
var messages = document.querySelector("#chatbot-messages");
var form = document.querySelector("#chatbot-form");
var input = document.querySelector("#chatbot-input");
var sendButton = document.querySelector("#chatbot-form button[type='submit']");
var loading = document.querySelector("#chatbot-loading");
var suggestions = document.querySelector("#chatbot-suggestions");
var suggestionList = document.querySelector("#chatbot-suggestion-list");

// This function receives the input from the user and returns the chatbot's response
function chatbotResponse(input) {
  // You can add more rules for different inputs here

  // Example: if the user says "hello", the chatbot responds with "Hi there!"
  if (input.toLowerCase() === "hello") {
    return "Hi there!";
  }

  // If the input is not recognized, the chatbot responds with a default message
  return "I'm sorry, I didn't understand your input. Could you please rephrase that?";
}

// This function sends a message to the chatbot and displays the response
function sendMessage(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the user's input
  var userInput = input.value;

  // Clear the input field
  input.value = "";

  // Show a loading indicator
  loading.classList.remove("hidden");

  // Send the message to the chatbot and get the response
  var chatbotResponse = chatbotResponse(userInput);

  // Hide the loading indicator
  loading.classList.add("hidden");

  // Display the chatbot's response
  messages.innerHTML += "<p>Bot: " + chatbotResponse + "</p>";

  // Scroll the message container to the bottom
  messages.scrollTop = messages.scrollHeight;
}

// This function handles the conversation between the user and the chatbot
function startConversation() {
  // Set up the form to send messages when the send button is clicked
  form.addEventListener("submit", sendMessage);
}

// Start the conversation when the page loads
startConversation();
