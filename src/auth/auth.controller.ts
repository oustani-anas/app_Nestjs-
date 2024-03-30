
import { 
Controller, 
Param,
Get,
Post,
Body,
} from "@nestjs/common";

import { JwtService  } from "@nestjs/jwt"
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor (private readonly jwtservice: JwtService, 
                private readonly authService: AuthService) {}
    @Get("test")
    async func(){
        console.log("test is testing");
        return "this is the test endpoint";
    }

    @Post("ok")
    async ok(){
        console.log("ok is ko in the controller");
        return "ok"
    }

    @Get('auth/:id')
    async getAuthById(@Param('id') id: string) {
        // id will contain the value extracted from the URL
        console.log('ID:', id);
        let res = `the id is ${id}`
        return res
        // Your controller logic here
    }

    @Post('login')
    async login(@Body() credentials: { username: string; password: string }) {
    // Authenticate user
    const token = await this.authService.login(credentials.username, credentials.password);
    if (!token) {
      // Return appropriate response if authentication fails
      return { message: 'Invalid credentials' };
    }

    // Return token as response
    return { token };
  }
} 