import { User, UserJson } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class CreateUserUseCase {
    private userRepository;
    
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    handle(userJson: UserJson) {
        this.userRepository.save(new User(userJson));
    }
}
