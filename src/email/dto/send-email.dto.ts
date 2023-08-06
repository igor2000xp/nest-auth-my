import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({
    example: 'myemail@gmail.com',
    description: 'requested users email',
  })
  @IsEmail({}, { message: 'Email is incorrect' })
  @IsString({ message: 'Email must be string' })
  to: string;

  // @ApiProperty({
  //   example: 'Change password TWSend',
  //   description: 'Subject of the customer email',
  // })
  // @IsString({ message: 'subject must be string' })
  // subject?: string;
  //
  // @ApiProperty({
  //   example: 'Change password request',
  //   description: 'Text of the customer email',
  // })
  // @IsString({ message: 'text must be string' })
  // text?: string;
}
