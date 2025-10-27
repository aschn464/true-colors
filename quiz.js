function displayQuiz(){
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
    ]

// variables to hold scores
let questionIndex = 0;
let greenTotal = 0;
let blueTotal = 0;
let orangeTotal = 0;
let goldTotal = 0;

document.getElementById('begin-quiz').addEventListener('click', function() {
    document.getElementById('quiz-page').style.display = 'block';
});

function displayQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const choiceElements = document.getElementById('choices');

    choiceElements.innerHTML = '';

    questionElement.textContent = currentQuestion.question;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choices');
        button.addEventListener('click', () => handleChoiceClick(index));
        choiceElements.appendChild(button);
    });
}

function handleChoiceClick(choiceIndex){
    const currentQuestion = questions[questionIndex];
    
    if (choiceIndex = 0){
        greenTotal += 1;
    }

    else if (choiceIndex = 1){
        blueTotal += 1;
    }

    else if (choiceIndex = 2){
        orangeTotal += 1;
    }

    else if (choiceIndex = 3){
        goldTotal += 1;
    }


    questionIndex++;

    if (currentQuestion < questions.length){
        displayQuestion();
    } else {
        showScore();
    }
    
}

function showScore(){
    const firstScore = Math.max(greenTotal, blueTotal, goldTotal, orangeTotal);
    const secondScore = 0;
    const primaryColor;
    const secondaryColor;

    if(firstScore == greenTotal){
        primaryColor = 'green';
        secondScore = Math.max(blueTotal, goldTotal, orangeTotal);

        if (secondScore == blueTotal){
            secondaryColor = 'blue';
        } else if (secondScore == goldTotal){
            secondaryColor = 'gold';
        } else if (secondScore == orangeTotal){
            secondaryColor = 'orange';
        }
        

        
    else if (firstScore == blueTotal){
        primaryColor = 'blue';
        secondScore = Math.max(greenTotal, goldTotal, orangeTotal);

        if (secondScore == greenTotal){
            secondaryColor = 'green';
        } else if (secondScore == goldTotal){
            secondaryColor = 'gold';
        } else if (secondScore == orangeTotal){
            secondaryColor = 'orange';
        }

        
    } else if (firstScore == goldTotal){
        primaryColor = 'gold';
        secondScore = Math.max(greenTotal, blueTotal, orangeTotal);

        if (secondScore == greenTotal){
            secondaryColor = 'green';
        } else if (secondScore == blueTotal){
            secondaryColor = 'blue';
        } else if (secondScore == orangeTotal){
            secondaryColor = 'orange';
        }

        
    } else if (firstScore == orangeTotal){
        primaryColor = 'orange';
        secondScore = Math.max(greenTotal, blueTotal, goldTotal);

        if (secondScore == greenTotal){
            secondaryColor = 'green';
        } else if (secondScore == blueTotal){
            secondaryColor = 'blue';
        } else if (secondScore == goldTotal){
            secondaryColor = 'gold';
        }

        
    }

    document.getElementById('results').style.display = 'none';

    const questionElement = document.getElementById('question');
    const choiceElements = document.getElementById('choices');
    const quizContainer = document.getElementById('quiz');

    questionElement.remove();
    choiceElements.remove();
    quizContainer.remove();

    document.getElementById('results').style.display = 'block'






    displayQuestion();
    document.addEventListener('DOMContentLoaded', () => {
        const choiceElements = document.querySelectorAll('.choice-container');
        choiceElements.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
    }

    displayQuiz();

    


    
    
        
