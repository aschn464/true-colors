document.addEventListener('DOMContentLoaded', () => {
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

  let questionIndex = 0;
  const scores = { green: 0, blue: 0, orange: 0, gold: 0 };

  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const quizPage = document.getElementById('quiz-page');
  const resultsEl = document.getElementById('results');

  document.getElementById('begin-quiz').addEventListener('click', () => {
    document.getElementById('intro').style.display = 'none';
    quizPage.style.display = 'block';
    displayQuestion();
  });

  function displayQuestion() {
    const current = questions[questionIndex];
    questionEl.textContent = current.question;
    choicesEl.innerHTML = '';

    current.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.classList.add('choice');
      btn.addEventListener('click', () => handleChoice(i));
      choicesEl.appendChild(btn);
    });
  }

  function handleChoice(index) {
    if (index === 0) scores.green++;
    else if (index === 1) scores.blue++;
    else if (index === 2) scores.orange++;
    else if (index === 3) scores.gold++;

    questionIndex++;
    if (questionIndex < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizPage.style.display = 'none';
    resultsEl.style.display = 'block';

    const sortedColors = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    document.getElementById('primary').textContent = `Primary Color: ${sortedColors[0].toUpperCase()}`;
    document.getElementById('secondary').textContent = `Secondary Color: ${sortedColors[1].toUpperCase()}`;
  }
});

    


    
    
        
