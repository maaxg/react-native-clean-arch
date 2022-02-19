import {RequiredFieldError} from '../errors';
import {FieldValidation} from '../protocols';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: any): Error {
    return input[this.field] ? new Error() : new RequiredFieldError();
  }
}
