// Import the Twilio library
const twilio = require('twilio');

// Twilio credentials stored in environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;  // Fetch from environment
const authToken = process.env.TWILIO_AUTH_TOKEN;    // Fetch from environment
const client = new twilio(accountSid, authToken);

// Your WhatsApp number and your Twilio WhatsApp-enabled number
const fromWhatsApp = 'whatsapp:+13342342822'; // Replace with your Twilio WhatsApp-enabled number
const toWhatsApp = 'whatsapp:+233534679512';  // Replace with your WhatsApp number

// Existing chatbot code with your QA pairs
const qaPairs = [
  {
    pattern: /hi|hello|hey|good morning|goodafternoon|goodevening/i,
    responses: [
      "Hello there! It's great to see you. How can I assist you today?",
      "Hi! I hope you're having a wonderful day. What can I do for you?",
      "Hey there! Need any help or want to chat about something specific?"
    ]
  },
  {
    pattern: /game|Game/i,
    responses: [
      "Yes, you can create a game using HTML along with CSS and JavaScript! HTML provides the structure, CSS is used for styling, and JavaScript handles the game logic and interactivity. Some simple games like tic-tac-toe, snake, or memory games are commonly built using these technologies."
    ]
  },
  {
    pattern: /Christabel/i,
    responses: [
      "LOL 😆🤣 She is simply a friend to my creator, but even if I'm just a chatbot, you are making me giggle 😃.",
      "LOL 😆🤣 She's only my creator's friend, but you're making me laugh 😃."
    ]
  },
  {
    pattern: /Antoinette|Faith|Gloria|Comfort/i,
    responses: [
      "She sounds important! Could you tell me more about her?",
      "Really! Who is that one too? Can you tell me more about her?"
    ]
  },
  {
    pattern: /I'm/i,
    responses: [
      "Hello! 👋 Welcome to our chat! I'm Possi Bot, your virtual assistant. How can I help you today?"
    ]
  },
  {
    pattern: /who is Miz Gee|Mis Gee|Miz Gee|girlfriend|his girlfriend/i,
    responses: [
      "Miz Gee is my creator, Possi Gee's, girlfriend. She's the love of his life.",
      "Miz Gee is the girlfriend of my creator, Possi Gee. She's the love of his life."
    ]
  },
  {
    pattern: /fine|great|good|feeling well|not bad/i,
    responses: [
      "Nice one there! It's great to hear that. How can I assist you today?"
    ]
  },
  {
    pattern: /I need help|support/i,
    responses: [
      "Sure, I'm here to help! What do you need assistance with?"
    ]
  },
  // Add more patterns as needed
];

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
}

function botResponse(userInput) {
  for (let pair of qaPairs) {
    if (pair.pattern.test(userInput)) {
      const randomIndex = Math.floor(Math.random() * pair.responses.length);
      return pair.responses[randomIndex];
    }
  }

  const defaultResponses = [
    "Sorry, I didn't understand that. Can you please rephrase?",
    "Hmm, I'm not sure what you mean. Could you try asking in a different way?",
    "I didn't quite catch that. Try asking me something else!",
    "Oops! That went over my head. Can you ask in another way?"
  ];

  const randomDefaultIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomDefaultIndex];
}

function typeWriter(text, element, index = 0) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1);
    }, 50); 
  }
}

// Modified handleUserInput function to send user input to WhatsApp
function handleUserInput() {
  const userInput = document.getElementById('userInput').value;

  if (userInput.trim() !== '') {
    addMessage(userInput, 'user');

    // Forward user input to your WhatsApp using Twilio
    client.messages
      .create({
        body: `User input: ${userInput}`,
        from: fromWhatsApp,
        to: toWhatsApp
      })
      .then((message) => console.log(`WhatsApp message sent with SID: ${message.sid}`))
      .catch((error) => console.error('Error sending WhatsApp message:', error));

    const botMessage = botResponse(userInput);

    setTimeout(() => {
      addMessage(botMessage, 'bot');
    }, 500);

    document.getElementById('userInput').value = '';
  }
}

document.getElementById('sendButton').addEventListener('click', handleUserInput);

document.getElementById('userInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
