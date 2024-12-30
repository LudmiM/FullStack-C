import { check } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const addTaskValidation = [
    check("title")
        .notEmpty().withMessage('El nombre de la tarea es obligatorio'),
    check('status')
        .optional()
        .isIn(['true', 'false']).withMessage('El status debe ser: true / false'),

    inputsErrors
];

export default addTaskValidation;