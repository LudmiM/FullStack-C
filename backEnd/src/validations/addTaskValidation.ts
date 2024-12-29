import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const addTaskValidation = [
    check("title")
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    check('status')
        .optional()
        .isIn(['completed', 'pending', 'false']).withMessage('El status debe ser uno de: completed, pending, false'),

    inputsErrors
];

export default addTaskValidation;