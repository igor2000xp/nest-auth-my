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

  @ApiProperty({
    example: 'This email from TWSend',
    description: 'For example the subject of the user\'s email',
  })
  @IsString({ message: 'Subject must be string' })
  subject?: string = '';

  @ApiProperty({
    example: 'This email from TWSend',
    description: 'An example of the text of the letter to the user',
  })
  @IsString({ message: 'Subject must be string' })
  text?: string = '';
}
