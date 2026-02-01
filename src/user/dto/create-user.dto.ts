import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'usuario@emoresa.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: 'Santos' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: true, example: 'securePassword123' })
  @IsString()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  telephone?: string;

  @ApiProperty({ required: false, example: 1, description: 'tenantId' })
  @IsOptional()
  tenantId?: number;
}
