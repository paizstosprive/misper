const fs = require('fs');
const path = require('path');
const { buildQuestions } = require('../utils/questionSeedData');

const outputPath = path.join(process.cwd(), 'image-prompts-nano-banana.md');
const questions = buildQuestions();

const content = questions
  .map((question, index) => {
    return [
      `Question ID : ${index + 1}`,
      `Nom fichier : ${question.imageFileName}`,
      `Chapitre : ${question.chapterCode} - ${question.chapterTitle}`,
      `Question : ${question.questionText}`,
      `Question basee sur l'image : ${question.imageBased ? 'Oui' : 'Non'}`,
      'Prompt Nano Banana :',
      question.prompt,
      ''
    ].join('\n');
  })
  .join('\n');

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Generated ${questions.length} prompts in ${outputPath}`);
