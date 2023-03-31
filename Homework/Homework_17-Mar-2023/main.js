// All the questions
const questions = [
  {
    no: 1,
    name: "What is the capitol of the United States ?",
    answers: [
      {
        option: "A",
        content: "Berlin",
        isTrue: false,
      },

      {
        option: "B",
        content: "Beijing",
        isTrue: false,
      },

      {
        option: "C",
        content: "Moscow",
        isTrue: false,
      },

      {
        option: "D",
        content: "Washington DC",
        isTrue: true,
      },
    ],
  },
  {
    no: 2,
    name: "What is the highest mount in the world ?",
    answers: [
      {
        option: "A",
        content: "K-2",
        isTrue: false,
      },

      {
        option: "B",
        content: "Everest",
        isTrue: true,
      },

      {
        option: "C",
        content: "Makalu",
        isTrue: false,
      },

      {
        option: "D",
        content: "Annapura",
        isTrue: false,
      },
    ],
  },
  {
    no: 3,
    name: "What is the longest river in the world ?",
    answers: [
      {
        option: "A",
        content: "Nile River",
        isTrue: true,
      },

      {
        option: "B",
        content: "Amazon River",
        isTrue: false,
      },

      {
        option: "C",
        content: "Vonga River",
        isTrue: false,
      },

      {
        option: "D",
        content: "Mekong Delta",
        isTrue: false,
      },
    ],
  },
  {
    no: 4,
    name: "What is the biggest lake in the world ?",
    answers: [
      {
        option: "A",
        content: "Superior",
        isTrue: false,
      },

      {
        option: "B",
        content: "Victoria",
        isTrue: false,
      },

      {
        option: "C",
        content: "Caspian",
        isTrue: true,
      },

      {
        option: "D",
        content: "Baikal",
        isTrue: false,
      },
    ],
  },
  {
    no: 5,
    name: "What is the biggest island in the world ?",
    answers: [
      {
        option: "A",
        content: "Hai Nam",
        isTrue: false,
      },

      {
        option: "B",
        content: "Ireland",
        isTrue: false,
      },

      {
        option: "C",
        content: "Madagascar",
        isTrue: false,
      },

      {
        option: "D",
        content: "Greenland",
        isTrue: true,
      },
    ],
  },

];

const frame = document.querySelector('#body');
questions.map(question=>{
    const questionBox = document.createElement('div');
    questionBox.className = 'questionFrame';

    // Create elements for question
    const questionName = document.createElement('h2');
    questionName.innerText = question.name; 
    const answers = document.createElement('div');
    answers.className = 'answers'
    question.answers.map(answer=>{
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answerBtn'
        const options =document.createElement('span');
        options.innerText = answer.option;
        const contents = document.createElement('h4');
        contents.innerText = answer.content;
        // These content is in the buttons
        answerBtn.appendChild(options);
        answerBtn.appendChild(contents);
        // Give answers to buttons element
        answers.appendChild(answerBtn);
    })
    questionBox.appendChild(questionName);
    questionBox.appendChild(answers);

   // Added data DOM
    frame.appendChild(questionBox)
})
