import express from 'express';
import restaurantController from '../controllers/restaurant.js';

const router = express.Router();
router.post('/', restaurantController.create);
router.get('/', restaurantController.getAll);
router.get('/:id', restaurantController.getById);
router.put('/:id', restaurantController.update);
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;