import { check, body, param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const editTaskValidation = [
    param('id').isMongoId().withMessage('ID no valido'),
    check("title")
        .notEmpty().withMessage('El nombre de la tarea es obligatorio'),
    check('status')
        .optional()
        .isIn(['true', 'false']).withMessage('El status debe ser uno de: true / false'),

    inputsErrors
];

export default editTaskValidation;