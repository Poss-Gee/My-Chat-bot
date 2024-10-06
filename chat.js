        // Memory to store user details
        const memory = {
            name: null,
            otherDetails: null
        };
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
          pattern:/Possi Gee's number/i,
          responses:[
                  "PossiGee's contact information is as follows: 0556814924, 0509349675, and 0534679512. I am a chatbot and do not possess a phone number. Need any help or want to chat about something specific?",
                  "You can reach PossiGee at these numbers: 0556814924, 0509349675, 0534679512. Unfortunately, I am a chatbot and do not have a physical number. What again do you need assistance with?"
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
        pattern: /importance of chatbots|why are chatbots important|benefits of chatbots|chatbots importance/i,
        responses: [
            
        ]
    },
    {
        pattern:/game|Game/i,
       responses: [

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
        pattern: /0530334303/i,
        responses: [
          "LOL 😆🤣 She is simply a friend to my creator, but even if I'm just a chatbot, you are making me giggle 😃. And before you bring yourself, please remember that she is the only friend I know. Other than her, he hasn't introduced me to anyone else yet.",
          "LOL 😆🤣 She's only my creator's friend, but even as a chatbot, you're making me laugh 😃. And before you bring yourself, please remember that she is the only friend I know. He's not introduced me to anyone else yet, other from her."
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
        pattern: /what is your name|tell me your name|what's your name|about you|I want to know you|who are you/i,
        responses: [
          "I am your Geechat, here to assist you with anything you need! Feel free to ask me any questions you may have.",
          "You can call me PossiBot, your virtual assistant. My job is to help you with information, answer your questions, or simply have a chat!",
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
        pattern: /what can you do|do/i,
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
        pattern: /how do you say hello in Spanish|Spanish/i,
        responses: [
          "'Hello' in Spanish is 'Hola.'"
        ]
      }
];

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
        messageElement.innerHTML = `<span class="thinking">Thinking...</span>`;

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
        span.remove();  
    }

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => {
            typeWriter(text, element, index + 1);
        }, 50); 
    }
}

function handleUserInput() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput !== '') {
        addMessage(userInput, 'user');

        const botMessage = botResponse(userInput);

        setTimeout(() => {
            addMessage(botMessage, 'bot');
        }, 500); 

        document.getElementById('userInput').value = '';
    }
}

function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices().find(voice => voice.name.includes('Google UK English Female')); // Optional: Customize voice
    synth.speak(utterance);
}

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
        
        setTimeout(() => {
            addMessage(botMessage, 'bot');
            speakText(botMessage);
        }, 500); 
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error: ' + event.error);
    };
}


document.getElementById('sendButton').addEventListener('click', handleUserInput);
document.getElementById('userInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

chat.scrollTop = chat.scrollHeight;

// Handling voice input
document.getElementById('voiceButton').addEventListener('click', startVoiceRecognition);
