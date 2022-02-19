import {InvalidFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: any): Error {
    return input[this.field]?.length < this.minLength
      ? new InvalidFieldError()
      : Error();
  }
}
