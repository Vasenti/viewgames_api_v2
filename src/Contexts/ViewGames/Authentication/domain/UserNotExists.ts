export class UserNotExists extends Error {
    constructor(email: string) {
      super(`El usuario con email ${email} no existe`);
    }
}