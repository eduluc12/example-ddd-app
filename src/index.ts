import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Client } from './statistics/Infrastructure/node_modules/pg';
import { CreateUserUseCase } from './statistics/Application/CreateUserUseCase';
import { UserPostgresRepository } from './statistics/Infrastructure/UserPostgresRepository';

export const createUser: HttpFunction = (req, res) => {
  
  const userRepository = new UserPostgresRepository(new Client())
  const createUserUseCase = new CreateUserUseCase(userRepository);

  createUserUseCase.handle(JSON.parse(req.params.user));

  res.send('user was added');
};
