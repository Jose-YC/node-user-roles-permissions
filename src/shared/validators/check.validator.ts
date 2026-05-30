import { validate } from "../../utils";
import { CustomError } from "../error/error.custom";
import { ValidationResult } from "./validator";

export const check = {

  atLeastOne(...values: unknown[]): void {
    const allEmpty = values.every(
      val => val === undefined || val === null
    );

    if (allEmpty) {
      throw CustomError.badRequest("You must provide at least one field");
    }
  }, 
  
  stringEmpty(val: any, fieldName: string): ValidationResult<string> {
    
    if (val === undefined || val === null) {
      return new ValidationResult<string>(null, `The field ${fieldName} is required.`, true);
    }
    
    if (typeof val === 'string' && !val.trim()) {
      return new ValidationResult<string>(null, `The field ${fieldName} cannot be empty.`, false);
    }

    if (typeof val !== 'string') {
      return new ValidationResult<string>(null, `The field ${fieldName} must be a string.`, false);
    }
    return new ValidationResult<string>(val.trim(), null, false);
  },

  positiveInt(val: any, fieldName: string): ValidationResult<number> {

    if (val === undefined || val === null) {
      return new ValidationResult<number>(null, `The field ${fieldName} is required.`, true);
    }
    
    if (typeof val !== 'number' || !Number.isInteger(val) || val <= 0) {
      return new ValidationResult<number>(null, `The field ${fieldName} must be a positive integer.`, false);
    }
    return new ValidationResult<number>(val, null, false);
  },

  isInteger(val: any, fieldName: string): ValidationResult<number> {

    if (val === undefined || val === null) {
      return new ValidationResult<number>(null, `The field ${fieldName} is required.`, true);
    }
    
    if (typeof val !== 'number' || !Number.isInteger(val) || val < 0) {
      return new ValidationResult<number>(null, `The field ${fieldName} must be a positive integer.`, false);
    }
    return new ValidationResult<number>(val, null, false);
  },

  boolean(val: any, fieldName: string): ValidationResult<boolean> {
    if (val === undefined || val === null) {
      return new ValidationResult<boolean>(null, `The field ${fieldName} is required.`, true);
    }
    if (typeof val !== 'boolean') {
      return new ValidationResult<boolean>(null, `The field ${fieldName} must be a boolean.`, false);
    }
    return new ValidationResult<boolean>(val, null, false);
  },

  email(val: unknown, fieldName: string): ValidationResult<string> {
    if (val === undefined || val === null) 
      return new ValidationResult<string>(null, `The field ${fieldName} is required.`, true);

    if (typeof val === 'string' && !val.trim()) {
      return new ValidationResult<string>(null, `The field ${fieldName} cannot be empty.`, false);
    }

    if (typeof val !== 'string' || !validate.email(val.trim())) {
      return new ValidationResult<string>(
        null,
        `El campo '${fieldName}' debe ser un correo electrónico válido.`,
        false
      );
    }

    return new ValidationResult<string>(val.trim(), null, false);
  },

  password(val: unknown, fieldName: string): ValidationResult<string> {
    if (val === undefined || val === null) 
      return new ValidationResult<string>(null, `The field ${fieldName} is required.`, true);

    if (typeof val === 'string' && !val.trim()) {
      return new ValidationResult<string>(null, `The field ${fieldName} cannot be empty.`, false);
    }

    if (typeof val !== 'string' || !validate.password(val)) {
      return new ValidationResult<string>(
        null,
        `El campo '${fieldName}' debe ser un correo electrónico válido.`,
        false
      );
    }

    return new ValidationResult<string>(val, null, false);
  },

  arrayInteger(val: unknown, fieldName: string): ValidationResult<number[]> {
    if (val === undefined || val === null) {
      return new ValidationResult<number[]>(null, `The field ${fieldName} is required.`, true);
    }

    if (!Array.isArray(val) || val.length === 0 ) {
      return new ValidationResult<number[]>(null, `The field ${fieldName} must be an array.`, false);
    }

    if (val.some(item => typeof item !== 'number' || !Number.isInteger(item) || item <= 0) ) {
      return new ValidationResult<number[]>(null, `The field ${fieldName} must be an array of integers.`, false);
    }

    const array: number[] = [...new Set(val as number[])];
    return new ValidationResult<number[]>(array, null, false);
  }
};