// utils/validation/commentaireValidation.js
const Joi = require('joi');

const commentaireSchema = Joi.object({
  libelle: Joi.string().min(10).max(500).required()
    .messages({
      'string.base': 'Le commentaire doit être une chaîne de caractères',
      'string.min': 'Le commentaire doit contenir au moins 10 caractères',
      'string.max': 'Le commentaire ne peut dépasser 500 caractères',
      'any.required': 'Le commentaire est obligatoire'
    }),
  commande_id: Joi.number().integer().required()
});

const validateCommentaire = (data) => {
  return commentaireSchema.validate(data, { abortEarly: false });
};

module.exports = { validateCommentaire };