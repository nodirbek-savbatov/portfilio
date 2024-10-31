import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class sendMailDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsEmail()
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsOptional()
  @IsString()
  address?: string;
}
