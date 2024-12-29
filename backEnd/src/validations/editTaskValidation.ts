import { check, body, param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const editTaskValidation = [
    param('id').isMongoId().withMessage('ID no valido'),
    check("title")
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    check('status')
        .optional()
        .isIn(['completed', 'pending', 'false']).withMessage('El status debe ser uno de: completed, pending, false'),

    inputsErrors
];

export default editTaskValidation;