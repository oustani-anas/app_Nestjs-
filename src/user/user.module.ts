import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as per your project structure

@Module({
    providers: [UserService],    
    //Export UserService if it needs to be used outside of UserModule
})
export class UserModule {}
