'use strict';

const { buildQuestions } = require('../utils/questionSeedData');

module.exports = {
  async up(queryInterface) {
    const questions = buildQuestions().map(({ imageFileName, prompt, imageBased, ...question }) => question);
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
