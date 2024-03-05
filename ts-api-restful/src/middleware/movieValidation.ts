import { body } from 'express-validator';

export const movieCreateValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('Title required')
      .isLength({ min: 5 })
      .withMessage('Minimum length is 5 characters'),

    body('rating')
      .isNumeric()
      .withMessage('Rating required')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('Invalid rating, must be between 0 and 10');
        }
        return true;
      }),

    body('description').isString().withMessage('Description required'),

    body('director').isString().withMessage('Director required'),

    body('poster').isURL().withMessage('Image URL required'),
  ];
};
