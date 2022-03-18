import { DomainEvent } from "../../../Shared/domain/DomainEvent";
import { User } from "./User";

type UserCreatedDomainEventBody = {
  readonly user: User;
  readonly eventName: string;
  readonly id: string;
};

export class UserCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'user.signup';

  readonly user: User;

  constructor({
    id,
    user,
    eventId,
    occurredOn
  }: {
    id: string,
    user: User;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super(UserCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);
    this.user = user; 
  }

  toPrimitive(): UserCreatedDomainEventBody {
    const { user, aggregateId } = this;
    return {
      user,
      eventName: UserCreatedDomainEvent.EVENT_NAME,
      id: aggregateId
    };
  }

  static fromPrimitives(
    aggregateId: string,
    body: UserCreatedDomainEventBody,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new UserCreatedDomainEvent({
      id: aggregateId,
      user: body.user,
      eventId,
      occurredOn
    });
  }
}