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
    pattern: /Christabel/i,
    responses: [
      "LOL 😆🤣 She is simply a friend to my creator, but even if I'm just a chatbot, you are making me giggle 😃. And before you bring yourself, please remember that she is the only friend I know. Other than her, he hasn't introduced me to anyone else yet.",
      "LOL 😆🤣 She's only my creator's friend, but even as a chatbot, you're making me laugh 😃. And before you bring yourself, please remember that she is the only friend I know. He's not introduced me to anyone else yet, other from her."
    ]
  },
  {
    pattern: /Antionette/i,
    responses: ["She sounds important! Could you tell me more about her?"]
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
  // ... other patterns ...
];

// The function to handle user input and match against patterns
function botResponse(userInput) {
  for (let pair of qaPairs) {
    if (pair.pattern.test(userInput)) {
      const randomIndex = Math.floor(Math.random() * pair.responses.length);
      return pair.responses[randomIndex];
    }
  }

  // Default response options
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

// Example usage
const userInput = "What's your name?";
console.log(botResponse(userInput)); // This will return a random response based on user input.
