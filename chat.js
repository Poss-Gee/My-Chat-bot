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
    pattern: /Christabel/i,
    responses: [
      "LOL 😆🤣 She is simply a friend to my creator, but even if I'm just a chatbot, you are making me giggle 😃.",
      "LOL 😆🤣 She's only my creator's friend, but even as a chatbot, you're making me laugh 😃."
    ]      
  },
  {
    pattern: /Antoinette/i,
    responses: [
      "She sounds important! Could you tell me more about her?"
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
      "Miz Gee is my creator, Possi Gee's, girlfriend. She's the love of his life, and he holds her in the highest regard—she means the world to him. (Possi Gee, my creator, wishes to share that he loves you, regardless of the distance. His affection for you remains strong and unchanging). 《°To Miz Gee°》",
      "Miz Gee is the girlfriend of my creator, Possi Gee. She's not just important to him—she's the love of his life, and he cherishes her deeply. Possi Gee, my creator, wants you to know that his love for you is always with you, no matter the distance. It’s a love that stays strong and true). 《°To Miz Gee°》"
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
    responses: [  // Fixed typo from 'response' to 'responses'
      "Sure, I'm here to help! What do you need assistance with?"
    ]
  },
  {
    pattern: /how old are you/i,
    responses: [     
      "I don’t have an age like humans do, but I’m always fresh and ready to help!",
      "I may not have a birthday, but I’m always here to assist you!"
    ]
  },
  {
    pattern: /What's the weather like today/i,
    responses: [
      "Today's weather is sunny with clear skies and temperatures ranging from a comfortable 28°C to 19°C.",
      "It looks like we might have partly cloudy skies today with occasional light showers."
    ]
  },
  {
    pattern: /How do I reset my password|password/i,
    responses: [
      "To reset your password, head to the login page and click on the 'Forgot Password' link."
    ]
  },
  {
    pattern: /Can you tell me a joke|joke/i,
    responses: [
      "Sure! Why don’t skeletons ever fight each other? Well, it's because they don’t have the guts!",
      "Here's a funny one for you: I used to play piano by ear, but now I use my hands."
    ]
  },
  {
    pattern: /Who is the president of the United States|US/i,
    responses: [
      "As of 2024, the president of the United States is Joe Biden."
    ]
  },
  {
    pattern: /what is your name|tell me your name|what's your name|about you|I want to know you|who are you/i,
    responses: [
      "I am your friendly Bot, here to assist you with anything you need!",
      "You can call me Possi Bot, your virtual assistant."
    ]
  },
  {
    pattern: /who created you|created|designed|creator|made|Possi Gee|possigee/i,
    responses: [
      "I was developed by Possi Gee, a talented individual who designed me to engage with people.",
      "Possi Gee is my creator! They put in a lot of work to ensure that I can communicate smoothly."
    ]
  },
  {
    pattern: /how are you/i,
    responses: [
      "I'm doing great, thanks for asking! I'm here to help you!"
    ]
  },
  {
    pattern: /bye|goodbye|see you|exit/i,
    responses: [
      "Goodbye! I hope you have a fantastic day ahead.",
      "See you soon! Don't hesitate to reach out."
    ]
  },
  {
    pattern: /thank you|thanks/i,
    responses: [
      "You're very welcome! I'm always happy to help.",
      "No problem at all! It’s my pleasure to assist you."
    ]
  },
  {
    pattern: /what can you do|do/i,
    responses: [
      "I’m here to assist with answering questions, providing useful information, or just chatting with you.",
      "My main role is to chat with you, answer your questions, and provide information or support."
    ]
  },
  {
    pattern: /what time is it now|time/i,
    responses: [
      "I can't access the current time, but you can check your device's clock!"
    ]
  },
  {
    pattern: /what is today's date|date/i,
    responses: [
      "I can't access the current date, but you can check your device's calendar!"
    ]
  },
  {
    pattern: /who won the football match yesterday|football/i,
    responses: [
      "Yesterday, Manchester United secured a 2-1 victory against Chelsea."
    ]
  },
  {
    pattern: /how tall is Mount Everest/i,
    responses: [
      "Mount Everest is 8,848.86 meters (29,031.7 feet) tall."
    ]
  },
  {
    pattern: /convert 100 usd to euros/i,
    responses: [
      "100 USD is currently approximately 90 Euros, depending on the exchange rate."
    ]
  },
  {
    pattern: /how do you say hello in Spanish|Spanish/i,
    responses: [
      "'Hello' in Spanish is 'Hola.'"
    ]
  }
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

  // Return a random default response
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

document.getElementById('sendButton').addEventListener('click', handleUserInput);

document.getElementById('userInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
