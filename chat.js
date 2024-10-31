// Memory to store user details
const memory = {
  name: null,
  otherDetails: {
    favoriteColor: null,
    location: null,
    age: null,
    phoneNumber: null,
    birthday: null
  }
};

const qaPairs = [
  {
    pattern: /hi|hello|hey|good morning|good afternoon|good evening/i,
    responses: [
      "Hello there! It's great to see you. How can I assist you today?",
      "Hi! I hope you're having a wonderful day. What can I do for you?",
      "Hey there! Need any help or want to chat about something specific?"
    ]
  },
  {
    pattern: /importance of chatbots|why are chatbots important|benefits of chatbots|chatbots importance/i,
    responses: [
        "Here are four important benefits of chatbots:<br><br>1. <strong>24/7 Availability</strong>: Chatbots can provide instant customer service and support at any time of the day.<br><br>2. <strong>Cost-Efficiency</strong>: They reduce the need for a large customer support team, thus cutting costs for businesses.<br><br>3. <strong>Instant Responses</strong>: Chatbots can respond to multiple customers simultaneously, improving efficiency and satisfaction.<br><br>4. <strong>Consistent Responses</strong>: They deliver consistent answers without error or emotion, ensuring that every customer gets the same high level of service."
    ]
},
{
pattern: /how to 3d game|create 3d game|3d game development/i,
responses: [
    "Creating a 3D game can be a challenging but rewarding process! Here are some general steps to get started:",
    "1. *Choose a Game Engine*: Popular choices include Unity, Unreal Engine, and Godot. These engines have built-in 3D capabilities and can simplify game development.",
    "2. *Learn 3D Modeling*: You can use software like Blender or Autodesk Maya to create 3D assets. There are many tutorials online to help you get started.",
    "3. *Learn Programming*: C# is commonly used with Unity, while C++ is used for Unreal Engine. Familiarize yourself with the engine’s scripting language.",
    "4. *Create Game Mechanics*: This involves coding how the game behaves—character movement, camera controls, interactions, etc.",
    "5. *Test and Optimize*: Test your game regularly, fixing bugs and optimizing performance to make it run smoothly.",
    "There are many tutorials available online, or you can find courses on platforms like Udemy, Coursera, or YouTube to dive deeper!"
]
},
  {
    pattern:/Ofori Michael|Ofori|Michael/i,
    responses: [
      "You may call him Michael Ofori, but I refer to him as Possi Gee, the creative force behind my invention. I am able to provide you with information and help with chats because of his hard work!",
      "Though he goes by Michael Ofori, I nickname him Possi Gee, the inspiration behind my creation. His diligence has allowed me to be able to assist you with chats and supply you information!"
    ]
  },
  {
    pattern:/Christabel/i,
    responses:[
      "Christabel, Your name is familiar to me. I was just introduced to you by my supervisor, who even asked me to share this with you. To make sure I'm providing the correct person with the information, I would like you to verify a security tip. It's very simple, just enter your phone number",
      "Christabel, I’ve heard your name before. My boss introduced you to me not long ago, and he even asked me to convey this message to you. I would like you to confirm a security tip so I can be sure I’m giving the information to the right person. it's very simple, just enter your phone number"
    ]
  },
  {
    pattern: /0530334303|0530 334 303|053 03 34 303|0 5 3 0 3 3 4 3 0 3/i,
    responses: [
      "Christabel, sometimes it can be easy to overlook the depth of a friendship when we’re caught up in daily life, but Michael truly sees you as much more than just a friend—you're his bestie, someone incredibly special. He values the bond you share, and the way you’ve been there for him means a lot to him. Try to see the friendship from his perspective: someone who genuinely treasures your presence, trusts you, and appreciates everything about your connection. Sometimes, all it takes is recognizing the love and loyalty in the little things to understand how deeply someone values you.", 
      "Christabel, sometimes we don’t realize how deeply someone values us until we see things from their perspective. Michael sees you as more than just a friend—you're his bestie, someone he truly cherishes. He appreciates the bond you both share, the support you’ve shown, and the moments that make your connection special. From his point of view, you’re a key part of his life, someone he trusts and respects deeply. Take a moment to see the friendship as he does: filled with love, loyalty, and appreciation. You mean more to him than you might realize."
    ]      
  },
  {
    pattern: /Antoinette|Faith|Gloria|Comfort/i,
    responses: [
      "She sounds important! Could you tell me more about her?",
      "Really! who is that one too. Can you tell me more about her. Is she your friend?"
    ]      
  },
  {
    pattern: /fooling/i,
    responses: [
      "Hello! Welcome to our chat! I'm Possi Bot, your virtual assistant. How can I help you today?"
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
    pattern: /fine|great|feeling well|not bad/i,
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
  {
    pattern: /how old are you/i,
    responses: [     
      "I don’t have an age like humans do, but I’m always fresh and ready to help! What’s on your mind today?",
      "I may not have a birthday, but I’m always here to assist you! What can I do for you today?"
    ]
  },
  {
    pattern: /What's the weather like today/i,
    responses: [
      "Today's weather is sunny with clear skies and temperatures ranging from a comfortable 28°C to 19°C. A perfect day for some outdoor activities!",
      "It looks like we might have partly cloudy skies today with occasional light showers. Be sure to carry an umbrella if you're heading out!"
    ]
  },
  {
    pattern: /How do I reset my password|password/i,
    responses: [
      "To reset your password, simply head to the login page and click on the 'Forgot Password' link. You'll need to enter your email address, and we'll send detailed instructions to help you reset it. Feel free to reach out if you encounter any issues!"
    ]
  },
  {
    pattern: /Can you tell me a joke|joke/i,
    responses: [
      "Sure! Why don’t skeletons ever fight each other? Well, it's because they don’t have the guts! Classic, right?",
      "Here's a funny one for you: I used to play piano by ear, but now I use my hands. I hope that gave you a chuckle!"
    ]
  },
  {
    pattern: /Who is the president of the United States|US/i,
    responses: [
      "As of 2024, the president of the United States is Joe Biden. He has been in office since 2021. Let me know if you'd like to know more about his policies or recent actions.",
      "Joe Biden is the current U.S. president, serving his first term since 2021. If you're curious about recent developments or political news, feel free to ask!"
    ]
  },
  {
    pattern: /what is your name|what's is your name|tell me your name|what's your name|about you|I want to know you|who are you/i,
    responses: [
      "I am your Geechat, here to assist you with anything you need! Feel free to ask me any questions you may have.",
      "You can call me Geechat, your virtual assistant. My job is to help you with information, answer your questions, or simply have a chat!",
      "Hello! I am GeeBot, specifically designed to help you out. Ask away, and I'll do my best to assist!"
    ]
  },
  {
    pattern: /who created you|created|designed|creator|made|Possi Gee|possigee/i,
    responses: [
      "I was developed by Possi Gee, a talented individual who designed me to engage with people and assist in various tasks. Pretty cool, right?",
      "Possi Gee is my creator! They put in a lot of work to ensure that I can communicate smoothly and help you with whatever you need.",
      "Possi Gee is the mastermind behind my creation. Thanks to their efforts, I am here to assist you with information and conversations!"
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
      "Goodbye! I hope you have a fantastic day ahead. Feel free to come back anytime you need assistance!",
      "See you soon! Don't hesitate to reach out whenever you have a question or just want to chat. Take care!",
      "Take care and have a wonderful day! I'm here whenever you need to talk or ask anything. See you next time!"
    ]
  },
  {
    pattern: /thank you|thanks/i,
    responses: [
      "You're very welcome! I'm always happy to help. If you ever need anything else, don't hesitate to ask!",
      "No problem at all! It’s my pleasure to assist you. Feel free to reach out if you need more help.",
      "Happy to help! I'm here for you anytime you need me. Just let me know what you'd like to chat about next!"
    ]
  },
  {
    pattern: /what can you do|what's you job|what's your purpose/i,
    responses: [
      "I’m here to assist with answering questions, providing useful information, or just chatting with you. If you’re not sure where to start, ask me anything!",
      "My main role is to chat with you, answer your questions, and provide information or support. Give me a try—what would you like to know?",
      "I'm a chatbot, and my job is to engage in conversations, help you find answers, or provide assistance with anything you'd like to discuss."
    ]
  },
  {
    pattern: /what time is it now|time/i,
    responses: [
      "I can't access the current time,  but you can check your device's clock! Let me know if you'd like me to assist you with anything else."
    ]
  },
  {
    pattern: /what is today's date|date/i,
    responses: [
     "I can't access the current date,  but you can check your device's Calander! Let me know if you need more conversions or have other questions!"
    ]
  },
  {
    pattern: /who won the football match yesterday|football/i,
    responses: [
      "Yesterday, Manchester United secured a 2-1 victory against Chelsea. It was quite an exciting match!",
      "In yesterday's match, Liverpool triumphed over Arsenal with a 3-0 scoreline. Would you like more details about the game?"
    ]
  },
  {
    pattern: /how tall is Mount Everest/i,
    responses: [
      "Mount Everest is 8,848.86 meters (29,031.7 feet) tall, making it the highest point on Earth. Quite an amazing natural wonder!",
      "Standing at 8,848 meters, Mount Everest is the tallest mountain in the world. It’s a dream for many mountaineers to climb!"
    ]
  },
  {
    pattern: /convert 100 usd to euros/i,
    responses: [
      "100 USD is currently approximately 90 Euros, depending on the exchange rate. Currency rates can fluctuate, so it's always good to check for the latest updates.",
      "At today's exchange rate, 100 USD equals about 90 Euros. Keep in mind, though, that exchange rates change frequently."
    ]
  },

  {
    pattern: /my name is (\w+)/i,
    responses: (match) => {
      memory.name = match[1];
      return `Nice to meet you, ${memory.name}! How can I assist you today?`;
    }
  },
  {
    pattern: /what is my name|do you remember my name/i,
    responses: () => {
      if (memory.name) {
        return `Your name is ${memory.name}. How can I help you?`;
      } else {
        return "I don't know your name yet. Please tell me by saying 'My name is [your name]'.";
      }
    }
  },
  {
    pattern: /my favourite colour is (\w+)/i,
    responses: (match) => {
      memory.otherDetails.favoriteColor = match[1];
      return `Got it! Your favourite colour is ${memory.otherDetails.favoriteColor}.`;
    }
  },
  {
    pattern: /what is my favourite color/i,
    responses: () => {
      if (memory.otherDetails.favoriteColor) {
        return `Your favorite color is ${memory.otherDetails.favoriteColor}.`;
      } else {
        return "I don't know your favourite colour yet. Please tell me by saying 'My favourite colour is [colour]'.";
      }
    }
  },
  {
    pattern: /my favorite color is (\w+)/i,
    responses: (match) => {
      memory.otherDetails.favoriteColor = match[1];
      return `Got it! Your favorite color is ${memory.otherDetails.favoriteColor}.`;
    }
  },
  {
    pattern: /what is my favorite color/i,
    responses: () => {
      if (memory.otherDetails.favoriteColor) {
        return `Your favorite color is ${memory.otherDetails.favoriteColor}.`;
      } else {
        return "I don't know your favorite color yet. Please tell me by saying 'My favorite color is [color]'.";
      }
    }
  },
  {
    pattern: /I live in (\w+)/i,
    responses: (match) => {
      memory.otherDetails.location = match[1];
      return `Got it! You live in ${memory.otherDetails.location}.`;
    }
  },
  {
    pattern: /where do I live/i,
    responses: () => {
      if (memory.otherDetails.location) {
        return `You live in ${memory.otherDetails.location}.`;
      } else {
        return "I don't know where you live yet. Please tell me by saying 'I live in [location]'.";
      }
    }
  },
  {
    pattern: /I am (\d+) years old/i,
    responses: (match) => {
      memory.otherDetails.age = match[1];
      return `Great! You are ${memory.otherDetails.age} years old.`;
    }
  },
  {
    pattern: /how old am I/i,
    responses: () => {
      if (memory.otherDetails.age) {
        return `You are ${memory.otherDetails.age} years old.`;
      } else {
        return "I don't know your age yet. Please tell me by saying 'I am [age] years old'.";
      }
    }
  },
  {
    pattern: /my phone number is ([\d\s]+)/i,
    responses: (match) => {
      memory.otherDetails.phoneNumber = match[1];
      return `Thanks! I've saved your phone number as ${memory.otherDetails.phoneNumber}.`;
    }
  },
  {
    pattern: /what is my phone number/i,
    responses: () => {
      if (memory.otherDetails.phoneNumber) {
        return `Your phone number is ${memory.otherDetails.phoneNumber}.`;
      } else {
        return "I don't know your phone number yet. Please tell me by saying 'My phone number is [number]'.";
      }
    }
  },
  {
    pattern: /my birthday is on (\d{2}\/\d{2}\/\d{4})/i,
    responses: (match) => {
      memory.otherDetails.birthday = match[1];
      return `Awesome! I've saved your birthday as ${memory.otherDetails.birthday}.`;
    }
  },
  {
    pattern: /when is my birthday/i,
    responses: () => {
      if (memory.otherDetails.birthday) {
        return `Your birthday is on ${memory.otherDetails.birthday}.`;
      } else {
        return "I don't know your birthday yet. Please tell me by saying 'My birthday is on [date]'.";
      }
    }
  }
];

// Function to add messages to the chat log
function addMessage(message, sender) {
  const chatLog = document.getElementById('chat');
  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('message-wrapper');

  if (sender === 'user') {
    messageWrapper.classList.add('user-message-wrapper');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.innerHTML = message;
    messageWrapper.appendChild(messageElement);
  } else {
    messageWrapper.classList.add('bot-message-wrapper');
    const smartToyIcon = document.createElement('span');
    smartToyIcon.classList.add('material-icons', 'smart-toy-icon');
    smartToyIcon.innerText = 'smart_toy';

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'bot-message');
    messageElement.innerHTML = `<span class="thinking">●●●</span>`;

    messageWrapper.appendChild(smartToyIcon);
    messageWrapper.appendChild(messageElement);

    const botSpan = messageElement.querySelector('span');
    setTimeout(() => {
      typeWriter(message, messageElement);
    }, 1000);
  }

  chatLog.appendChild(messageWrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function botResponse(userInput) {
  for (let pair of qaPairs) {
    if (pair.pattern.test(userInput)) {
      if (typeof pair.responses === 'function') {
        return pair.responses(userInput.match(pair.pattern));
      }
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
  const span = element.querySelector('.thinking');
  if (span) {
    span.remove();  // Remove "thinking..." when typing starts
  }

  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1);
    }, 50); // Typing speed
  }
}

function handleUserInput() {
  const userInput = document.getElementById('userInput').value.trim();
  if (userInput !== '') {
    addMessage(userInput, 'user');
    const botMessage = botResponse(userInput);
    setTimeout(() => {
      addMessage(botMessage, 'bot');
    }, 500); // Delay before bot responds
    document.getElementById('userInput').value = '';
  }
}

// Text-to-Speech (Bot speaking)
function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices().find(voice => voice.name.includes('Google UK English Female')) || synth.getVoices()[0]; // Optional: Customize voice or default
  synth.speak(utterance);
}

// Speech-to-Text (User speaking)
function startVoiceRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const userInput = event.results[0][0].transcript;
    addMessage(userInput, 'user');
    const botMessage = botResponse(userInput);
    
    // Trigger bot voice response only after speech input
    setTimeout(() => {
      addMessage(botMessage, 'bot');
      speakText(botMessage); // Speak out the response
    }, 500);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error: ' + event.error);
  };
}

// Event listeners for button and input
document.getElementById('sendButton').addEventListener('click', handleUserInput);
document.getElementById('userInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});

// Handling voice input
document.getElementById('voiceButton').addEventListener('click', startVoiceRecognition);
