import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Client } from 'pg';
import { CreateUserUseCase } from './user/Application/CreateUserUseCase';
import { UserPostgresRepository } from './user/Infrastructure/UserPostgresRepository';

export const createUser: HttpFunction = (req, res) => {

  
  const userRepository = new UserPostgresRepository(new Client())
  const createUserUseCase = new CreateUserUseCase(userRepository);

  createUserUseCase.handle(JSON.parse(req.params.user));

  res.send('user was added');
};
