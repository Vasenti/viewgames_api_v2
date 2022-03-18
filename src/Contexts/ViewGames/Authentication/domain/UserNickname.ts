import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class UserNickname extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan25Characters(value);
  }

  private ensureLengthIsLessThan25Characters(value: string): void {
    if (value.length > 25) {
      throw new InvalidArgumentError(`El nickname del usuario <${value}> es mayor a 25 carácteres`);
    }
  }
}