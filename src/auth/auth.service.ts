
// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // Inject JwtService for JWT operations
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string | null> {
    // Call your user service or repository to fetch user data
    const user = await this.userService.findByUsername(username);

    // Check if user exists and password matches
    if (user && user.password === password) {
      // Generate JWT token with user payload
      const payload = { username: user.username, sub: user.id }; // You can include any user data here
      return this.jwtService.sign(payload);
    }

    return null; // Return null if authentication fails
  }
}
