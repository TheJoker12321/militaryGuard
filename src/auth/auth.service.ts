import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    
    const user = await this.usersService.getByUsername(username);
    
    if (!user || !user.password) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    
  
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    
    const payload = { id: user.id, username: user.username, role : user.roles };

    return {
      // Here the JWT secret key that's used for signing the payload 
      // is the key that was passsed in the JwtModule
      access_token: await this.jwtService.signAsync(payload),
    };

  }

}