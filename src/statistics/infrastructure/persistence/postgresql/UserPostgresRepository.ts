import { Client } from 'pg';
import { User } from '../domain/User';
import { UserRepository } from '../../../domain/contracts/UserRepository';

export class UserPostgresRepository implements UserRepository {

    private client;

    constructor(client: Client) {
        this.client = client;
    }

    async save(user: User) {
        await this.client.connect();
        await this.client.query('INSERT INTO users(name, email, is_active) VALUES($1, $2, $3)', [
            user.getName(),
            user.getEmail(),
            user.getIsActive(),
        ]);
        await this.client.end();
    }
}
