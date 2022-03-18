import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class UserFullname extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan40Characters(value);
  }

  private ensureLengthIsLessThan40Characters(value: string): void {
    if (value.length > 40) {
      throw new InvalidArgumentError(`El nombre completo del usuario <${value}> es mayor a 40 carácteres`);
    }
  }
}