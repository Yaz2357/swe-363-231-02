const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionsAndAnswers = {
  'What is your name?': 'My name is YazBot.',
  'How are you?': 'I am fine.',
  'How old are you?': 'Just few days.',
  'quit': 'Goodbye.'
};

function chatBot() {
  rl.question('> ', (input) => {
    const question = input.trim();

    if (question === 'quit') {
      console.log(questionsAndAnswers[question]);
      rl.close();
      return;
    }

    const answer = questionsAndAnswers[question];

    if (answer) {
      console.log(answer);
    } else {
      console.log('Please enter questions from the list.');
    }

    chatBot();
  });
}

console.log('Welcome to YazBot, Here is a list of what you can ask me.');
for(question in questionsAndAnswers){
    console.log('--'+question+'--');
}
chatBot();