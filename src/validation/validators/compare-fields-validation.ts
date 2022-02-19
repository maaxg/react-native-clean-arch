import {InvalidFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string,
  ) {}

  validate(input: any): Error {
    return input[this.field] !== input[this.fieldToCompare]
      ? new InvalidFieldError()
      : Error();
  }
}
