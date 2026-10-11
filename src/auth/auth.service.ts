import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@65code.se';
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH; 

    const isEmailValid = loginDto.email === adminEmail;
    const isPasswordValid = adminPasswordHash 
      ? await bcrypt.compare(loginDto.password, adminPasswordHash)
      : loginDto.password === (process.env.ADMIN_PASSWORD || 'admin123');

    if (!isEmailValid || !isPasswordValid) {
      throw new UnauthorizedException('Felaktiga inloggningsuppgifter');
    }

    const payload = { email: adminEmail, sub: 'admin-id' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}