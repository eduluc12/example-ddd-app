import { User } from "../aggregates/user";

export interface UserRepository {
    save(user: User): void;
}
