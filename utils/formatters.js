function formatDate(date) {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat('fr-BE', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(date));
}

function eurosFromCents(amount) {
  return new Intl.NumberFormat('fr-BE', {
    style: 'currency',
    currency: 'EUR'
  }).format((amount || 0) / 100);
}

function formatAttemptLabel(attempt) {
  if (!attempt) {
    return '';
  }

  if (attempt.chapterCode === 'FREE_SET_1') {
    return 'Serie gratuite 1';
  }

  if (attempt.chapterCode === 'FREE_SET_2') {
    return 'Serie gratuite 2';
  }

  if (attempt.chapterCode === 'EXAM') {
    return 'Examen type premium';
  }

  if (!attempt.chapterCode) {
    return 'Quiz';
  }

  return `Chapitre ${attempt.chapterCode}`;
}

module.exports = {
  formatDate,
  eurosFromCents,
  formatAttemptLabel
};
