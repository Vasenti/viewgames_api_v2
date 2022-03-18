export class UserAlreadyExists extends Error {
    constructor(id: string) {
      super(`El usuario ${id} ya existe`);
    }
}