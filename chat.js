const qaPairs = [
    // Your QA pairs here
    {
        pattern: /hi|hello|hey|good morning|goodafternoon|goodevening/i,
        responses: [
            "Hello there! It's great to see you. How can I assist you today?",
            "Hi! I hope you're having a wonderful day. What can I do for you?",
            "Hey there! Need any help or want to chat about something specific?"
        ]
    },
    {
        pattern: /I'm/i,
        responses: [
            "Hello! 👋 Welcome to our chat! I'm Possi Bot, your virtual assistant. How can I help you today?"
        ]
    },
    {
        pattern: /I'm fine|I'm great|I'm good|I'm not feeling well|not bad/i,
        responses: [
            "Nice one there! It's great to hear that. How can I assist you today?"
        ]
    },
    // ... more patterns here
];

// Function to add messages to the chat and store them in localStorage
function addMessage(message, sender) {
    const chatLog = document.getElementById('chat');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (sender === 'user') {
        messageElement.classList.add('user-message');
        messageElement.innerText = message;
    } else {
        messageElement.classList.add('bot-message');
        messageElement.innerHTML = "<span></span>";
        typeWriter(message, messageElement.querySelector('span')); 
    }
    
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;

    // Store the chat log in localStorage
    storeChat();
}

// Function to return a bot response based on user input
function botResponse(userInput) {
    for (let pair of qaPairs) {
        if (pair.pattern.test(userInput)) {
            const randomIndex = Math.floor(Math.random() * pair.responses.length);
            return pair.responses[randomIndex];
        }
    }

    return "Sorry, I didn't understand that. Can you please rephrase?";
}

// Typing effect for bot responses
function typeWriter(text, element, index = 0) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => {
            typeWriter(text, element, index + 1);
        }, 50);
    }
}

// Store chat in localStorage
function storeChat() {
    const chatLog = document.getElementById('chat');
    const chatContent = chatLog.innerHTML;
    localStorage.setItem('chatHistory', chatContent);
}

// Load chat from localStorage
function loadChat() {
    const chatLog = document.getElementById('chat');
    const chatHistory = localStorage.getItem('chatHistory');
    if (chatHistory) {
        chatLog.innerHTML = chatHistory;
    }
}

// Handle user input
function handleUserInput() {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user');
        
        const botMessage = botResponse(userInput);
        
        setTimeout(() => {
            addMessage(botMessage, 'bot');
        }, 500);
        
        document.getElementById('userInput').value = '';
    }
}

// Load chat history when the page is loaded
window.onload = function() {
    loadChat();
};

// Event listeners for sending messages
document.getElementById('sendButton').addEventListener('click', handleUserInput);
document.getElementById('userInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// View history button to toggle chat history
document.getElementById('viewHistoryButton').addEventListener('click', function () {
    const chatLog = document.getElementById('chat');
    if (chatLog.style.display === 'none' || chatLog.style.display === '') {
        chatLog.style.display = 'block';
        document.getElementById('viewHistoryButton').innerText = 'Hide History';
    } else {
        chatLog.style.display = 'none';
        document.getElementById('viewHistoryButton').innerText = 'View History';
    }
});
