import { check, body } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const addTaskValidation = [
    check("title")
        .notEmpty().withMessage('El nombre del proyecto es obligatorio'),

    inputsErrors
];

export default addTaskValidation;