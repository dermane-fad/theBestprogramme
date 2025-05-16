import Joi from 'joi';

const personneSchema = Joi.object({
  nom: Joi.string().min(2).max(50).required(),
  prenom: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('client', 'restaurateur', 'admin')
});

export const validatePersonne = (data) => {
  return personneSchema.validate(data, { abortEarly: false });
};