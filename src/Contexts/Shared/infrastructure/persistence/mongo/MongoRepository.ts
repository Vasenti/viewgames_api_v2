import { Collection, Document, MongoClient } from 'mongodb';
import { User } from '../../../../ViewGames/Authentication/domain/User';
import { AggregateRoot } from '../../../domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract moduleName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db('ViewGames').collection(this.moduleName());
  }

  protected async insert(user: User): Promise<any> {
    return (await this._client).db('ViewGames').collection(this.moduleName()).insertOne(user);
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }
}
