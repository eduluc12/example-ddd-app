import { User } from "../Domain/User";
import { CreateUserUseCase } from "./CreateUserUseCase";

test('CreateUserUseCase.test', () => {
    const userRepository = new UserFakeRepository([]);
    const createUserUseCase = new CreateUserUseCase(userRepository);

    createUserUseCase.handle({ name: 'Marcos', email: 'marcos.huaranga@doapps.me', isActive: true });

    const userWasAdded = userRepository.userStore.find(user => user.getName() === 'Marcos');

    expect(userWasAdded?.getName()).toBe('Marcos');
});

const UserFakeRepository = class {
    userStore;

    constructor(userStore: User[]) {
        this.userStore = userStore;
    }

    save(user: User) {
        this.userStore.push(user);
    }
}
