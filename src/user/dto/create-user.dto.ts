import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { create } from 'domain';

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

  @IsOptional()
  @IsString()
  telephone?: string;

  @ApiProperty({ required: false, example: 1, 'user' })
  tenanId: number;
}

create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({data: createUserDto});