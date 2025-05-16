// utils/validation/reservationValidation.js
const Joi = require('joi');

const reservationSchema = Joi.object({
  dateReservation: Joi.date().iso().required()
    .messages({
      'date.base': 'La date de réservation doit être une date valide',
      'date.format': 'La date doit être au format ISO (YYYY-MM-DD)',
      'any.required': 'La date de réservation est obligatoire'
    }),
  heureReservation: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required()
    .messages({
      'string.pattern.base': "L'heure doit être au format HH:MM",
      'any.required': "L'heure de réservation est obligatoire"
    }),
  nombrePersonnes: Joi.number().integer().min(1).max(20).required()
    .messages({
      'number.base': 'Le nombre de personnes doit être un nombre',
      'number.integer': 'Le nombre de personnes doit être un entier',
      'number.min': 'Le nombre de personnes doit être au moins 1',
      'number.max': 'Le nombre de personnes ne peut dépasser 20',
      'any.required': 'Le nombre de personnes est obligatoire'
    }),
  client_id: Joi.number().integer().required(),
  restaurant_id: Joi.number().integer().required()
});

const validateReservation = (data) => {
  return reservationSchema.validate(data, { abortEarly: false });
};

module.exports = { validateReservation };