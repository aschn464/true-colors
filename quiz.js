// wait for page content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // QUIZ QUESTIONS
  // choices must be in order for code to work: green, blue, orange, gold
  const questions = [      
      {
        question: "I learn best when I...",
        choices: ["Rely on logical thinking to gather facts", "Am personally or emotionally involved, or work within groups", "Can explore new possibilities, tackle creative tasks, and be flexible", "Use practical applications to make decisions and produce results"]
      },
      {
        question: "When I'm at my best, I'm described as...",
        choices: ["Dependable, accurate, logical, and objective", "Understanding, loyal, cooperative, and harmonious", "Imaginative, flexible, open minded, and creative", "Confident, assertive, practical, and results-oriented"]
      },
      {
        question: "I respond best to instructors and bosses who...",
        choices: ["Are factual and to the point", "Show appreciation and are friendly", "Encourage creativity and flexibility", "Expect me to be involved, be active, and get results"]
      },
      {
        question: "When working in a group, I tend to value...",
        choices: ["Objectivity, correctness, logistics", "Consensus, harmony, holistic views", "Originality, risk taking, being hands on", "Efficiency, results, order"]
      },
      {
        question: "I am most comfortable with people who are...",
        choices: ["Informed, serious, and accurate", "Supportive, appreciative, and friendly", "Creative, unique, and idealistic", "Productive, realistic, and dependable"]
      },
      {
        question: "When making a decision, I’m generally concerned with...",
        choices: ["Collecting information and facts to determine the right solution", "Finding the solution that pleases others and me", "Brainstorming creative solutions that feel right", "Quickly choosing the most practical and realistic solution"]
      },
      {
        question: "You could describe me as...",
        choices: ["Analytical, rational, efficient, trustworthy", "Caring, trusting, cooperative, gentle", "Innovative, spontaneous, dramatic, easily bored", "Productive, orderly, responsible, decisive"]
      },
      {
        question: "I excel at...",
        choices: ["Reaching accurate and logical conclusions","Being cooperative and respecting people's feelings","Finding hidden connections and creative outcomes","Making realistic, practical and timely decisions"]
      },
      {
        question: "Growing up, I was often referred to as...",
        choices: ["Curious","Understanding","Outgoing","Ambitious"]
      },
      {
        question: "In stressful situations, I tend to prioritize...",
        choices: ["Independence and patience","Communication and empathy","Intuition and optimism","Determination and perseverance"]
      },
      {
        question: "My communication style could be described as...",
        choices: ["Conceptual and knowledgeable","Tender and authentic","Humorous and friendly","Orderly and sensible"]
      },
      {
        question: "I often tend to be...",
        choices: ["Philosophical, complex, principled, composed","Compassionate, warm, communicative, genuine","Adventurous, high spirited, action-oriented, competitive","Organized, procedural, goal-oriented, straightforward"]
      } 
    ];

  // keeps track of question number
  let questionIndex = 0;

  // stores score tallies for each color
  const scores = { green: 0, blue: 0, orange: 0, gold: 0 };

  // page elements
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const quizPage = document.getElementById('quiz-page');
  const resultsEl = document.getElementById('results');

  // "begin quiz" button
  document.getElementById('begin-quiz').addEventListener('click', () => {
    // hide intro
    document.getElementById('intro').style.display = 'none';
    
    // show quiz
    quizPage.style.display = 'block';
    displayQuestion();
  });

  // display a question
  function displayQuestion() {
    const current = questions[questionIndex];
    questionEl.textContent = current.question;
    // clear old buttons
    choicesEl.innerHTML = '';

    // create button for each choice
    current.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.classList.add('choice');
      btn.addEventListener('click', () => handleChoice(i));
      choicesEl.appendChild(btn);
    });
  }

  // handle user choice
  function handleChoice(index) {
    // add to score corresponding to option that was clicked
    if (index === 0) scores.green++;
    else if (index === 1) scores.blue++;
    else if (index === 2) scores.orange++;
    else if (index === 3) scores.gold++;

    // move to next question or show results
    questionIndex++;
    if (questionIndex < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }

// // color descriptions
// const colorDescriptions = {
//   green: {
//     name: "Green",
//     work: "I am conceptual and an independent thinker.  For me, work is play.  I am drawn to constant challenge in careers, and like to develop models, explore ideas, or build systems to satisfy my need to feel appreciated and supported by others.",
//     relationships: "When I establish a relationship, I leave it to maintain itself and tune my energies back to my career. I feel most secure when people share similar priorities to my own and have my back without the need for an explicit say so. At times it is difficult for me to express my feelings and become emotionally vulnerable, so I strongly believe in the value of implicit acts of love.",
//     childhood: "I appeared to be older than my years and focused on my greatest interests, achieving in subjects that were mentally stimulating.  I was impatient with drill and routing, questioned authority, and found it necessary to respect teachers before I could learn from them.",
//     knowingme: ["I am conceptual", "I have an investigative mind", "I am an independent thinker, a natural nonconformist, and live life by my own standards.", "I like to do things that require vision, problem solving, strategy, ingenuity, design, and change.", "Once I have perfected an idea, I prefer to move on to a new challenge.", "I value knowledge, intelligence, insight, and justice.", "I enjoy relationships with shared interests.", "I prefer to let my head rule my heart.", "I am cool, calm, and collected.", "I do not express my emotions easily."],
    


  




  // show results
  function showResults() {
    quizPage.style.display = 'none';
    resultsEl.style.display = 'block';

    // sort colors by highest score
    const sortedColors = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);
    
    const primaryColor = sortedColors[0];
    const secondaryColor = sortedColors[1];

    // show primary and secondary colors
    document.getElementById('primary').textContent = `Primary Color: ${sortedColors[0].toUpperCase()}`;
    document.getElementById('secondary').textContent = `Secondary Color: ${sortedColors[1].toUpperCase()}`;

    // description sections
    // document.getElementById('work-desc').textContent = colorDescriptions[primaryColor].work;
    // document.getElementById('relationship-desc').textContent = colorDescriptions[primaryColor].relationships;
    // document.getElementById('childhood-desc').textContent = colorDescriptions[primaryColor].relationships;

    
  }
});

    


    
    
        
