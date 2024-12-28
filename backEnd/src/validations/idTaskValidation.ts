import { param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import inputsErrors from '../middleware/handleInputsErrors';

export const idTaskValidation = [
    param('id').isMongoId().withMessage('ID no valido'),

    inputsErrors
];

export default idTaskValidation;