import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: '2a11ed66-f659-4e95-8941-270f695a8e4c',
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 'ef8fd8bb-557e-4005-9f56-c155cddde01e',
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
