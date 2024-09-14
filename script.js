document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessageToChatWindow(userInput, 'user');
        sendMessageToChatGPT(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessageToChatWindow(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessageToChatGPT(message) {
    // Simulate typing indicator
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'block';

    setTimeout(() => {
        // Placeholder for sending the message to the backend using WebSocket or fetch
        const response = simulateChatGPTResponse(message);
        typingIndicator.style.display = 'none';
        addMessageToChatWindow(response, 'gpt');
    }, 1000); // Simulate delay
}

function simulateChatGPTResponse(message) {
    // This function simulates a response from ChatGPT
    // Replace this with an actual API call to ChatGPT in a production scenario
    return `ChatGPT: ${message.split('').reverse().join('')}`;
}

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
