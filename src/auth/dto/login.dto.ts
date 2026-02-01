import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
