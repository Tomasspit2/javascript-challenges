const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      options: ["0. Paris", "1. Londres", "2. Berlin", "3. Madrid"],
      correctAnswer: 0
    },
    {
      question: "Quelle est la couleur du ciel par temps clair ?",
      options: ["0. Vert", "1. Rouge", "2. Bleu", "3. Jaune"],
      correctAnswer: 2
    },
    {
      question: "Quel est l'organe principal du système respiratoire ?",
      options: ["0. Cœur", "1. Poumon", "2. Rein", "3. Estomac"],
      correctAnswer: 1
    },
    {
      question: "Quelle planète est souvent appelée la 'planète rouge' ?",
      options: ["0. Saturne", "1. Vénus", "2. Jupiter", "3. Mars"],
      correctAnswer: 3
    },
    {
      question: "Quel est le plus grand océan de la Terre ?",
      options: ["0. Pacifique", "1. Atlantique", "2. Indien", "3. Arctique"],
      correctAnswer: 0
    }
  ];
  
  function askQuestions(questions) {
    let score = 0;
  
    for (const question of questions) {
      const userAnswer = parseInt(prompt(`${question.question}\n${question.options.join('\n')}`));
  
      if (isNaN(userAnswer)) {
        alert('Veuillez entrer un numéro.');
        return;
      }
  
      if (userAnswer === question.correctAnswer) {
        alert('Bonne réponse!');
        score++;
      } else {
        alert(`Mauvaise réponse. La bonne réponse était : ${question.options[question.correctAnswer]}`);
      }
    }
  
    alert(`Vous avez répondu correctement à ${score} question(s) sur ${questions.length}.`);
  }
  
  // Appeler la fonction pour poser les questions à l'utilisateur
  askQuestions(questions);