import { EventBus } from "../../../../Shared/domain/EventBus";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserSignin{
    private userRepository: UserRepository;
    private eventBus: EventBus;

    constructor(userRepository: UserRepository, eventBus: EventBus){
        this.userRepository = userRepository;
        this.eventBus = eventBus;
    }
    async run(user: User): Promise<void> {
        await this.userRepository.signin(user);
        await this.eventBus.publish(user.pullDomainEvents());
    }
}