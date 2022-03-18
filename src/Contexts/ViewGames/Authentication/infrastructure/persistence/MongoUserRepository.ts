import { Collection, Document, WithId } from 'mongodb';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { UserId } from '../../../Shared/domain/Users/UserId';
import { User } from '../../domain/User';
import { UserAlreadyExists } from '../../domain/UserAlreadyExists';
import { UserNotExists } from '../../domain/UserNotExists';
import { UserRepository } from '../../domain/UserRepository';

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  async signup(user: User): Promise<void> {
    const findUser = await this.search(user);
    console.log(findUser)
    if(!findUser){
      return this.insert(user);
    } else throw new UserAlreadyExists(user.id);
  }
  async signin(user: User): Promise<Nullable<User>> {
      console.log(user)
      const findUser = await this.search(user);
      if(findUser){
        if(findUser.password === user.password) {
          return User.fromPrimitives({
            id: findUser._id.toString(),
            fullname: findUser.fullname,
            nickname: findUser.nickname,
            email: findUser.email,
            password: '',
            avatar: findUser.avatar,
            created_at: findUser.created_at,
            deleted_at: findUser.deleted_at,
            updated_at: findUser.updated_at
          });
        }else throw new UserNotExists(user.email);
        
      }else throw new UserNotExists(user.email);
  }

  public async search(user: User): Promise<Nullable<WithId<Document>>> {
    const collection = await this.collection();
    const document = await collection.findOne({ email: user.email });
    return document;
  }

  protected moduleName(): string {
    return 'usuarios';
  }
}