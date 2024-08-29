import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './entities/jwt-payload.entity';
import { SignInResponseDto } from './dto/signin-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<SignInResponseDto> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException();
    }
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      token_type: 'Bearer',
    };
  }
}
