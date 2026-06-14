const { validationResult } = require('express-validator');

function handleValidation(view) {
  return (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).render(view, {
      title: res.locals.title || 'Formulaire',
      errors: errors.array(),
      oldInput: req.body
    });
  };
}

module.exports = {
  handleValidation
};
