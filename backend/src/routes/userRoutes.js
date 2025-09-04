const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

const createRules = [
  body('name').notEmpty().withMessage('Name is required').escape(),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').normalizeEmail(),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('company').optional().escape(),
  body('role').optional().escape(),
  body('address.street').optional().escape(),
  body('address.city').optional().escape(),
  body('address.zipcode').optional().escape(),
  body('address.geo.lat').optional(),
  body('address.geo.lng').optional(),
];

const updateRules = [
  body('name').optional().notEmpty().withMessage('Name cannot be empty').escape(),
  body('email').optional().isEmail().withMessage('Invalid email format').normalizeEmail(),
  body('phone').optional().notEmpty(),
  body('company').optional().escape(),
  body('role').optional().escape(),
  body('status').optional().isIn(['active', 'inactive']).withMessage('Invalid status'),
  body('address.street').optional().escape(),
  body('address.city').optional().escape(),
  body('address.zipcode').optional().escape(),
  body('address.geo.lat').optional(),
  body('address.geo.lng').optional(),
];

router.get('/', userController.getUsers);
router.get('/:id', [param('id').isMongoId().withMessage('Invalid user ID')], userController.getUserById);
router.post('/', createRules, userController.createUser);
router.put('/:id', [param('id').isMongoId().withMessage('Invalid user ID'), ...updateRules], userController.updateUser);
router.delete('/:id', [param('id').isMongoId().withMessage('Invalid user ID')], userController.deleteUser);

module.exports = router;
