import { CustomError } from "../error/error.custom";

export class ValidationResult<T> {
  
    constructor(
        private readonly value: T | null,
        private readonly error: string | null,
        private readonly isEmpty: boolean
    ) {}

    get values(): T {
        if (this.error && !this.isEmpty) throw CustomError.badRequest(this.error);
        if (this.isEmpty) throw CustomError.badRequest(this.error || "The field is required.");
        return this.value as T;
    }

    get optional(): T | null {
        if (this.isEmpty) return null;
        if (this.error) throw CustomError.badRequest(this.error);
        return this.value;
    }
}