import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, name, password }: IRequest): Promise<User> {
    const checkUserRepository = await this.usersRepository.findByEmail(email);

    if (checkUserRepository) {
      throw new AppError('Email already used');
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });
    return user;
  }
}

export default CreateUserService;
