import { User, UserJson } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { UserService } from "../domain/services/user";

export class CreateUserUseCase {
    private userRepository;
    
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    handle(userJson: UserJson) {
        // this.userRepository.save(new User(userJson));
        new UserService(
            this.userRepository
        ).createAccount();
    }
}
