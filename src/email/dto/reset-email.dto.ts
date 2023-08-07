import { PickType } from '@nestjs/swagger';
import { SendEmailDto } from './send-mail.dto';
// import { IsEmail, IsString } from 'class-validator';

// export class ResetEmailDto {
//   @ApiProperty({
//     example: 'myemail@gmail.com',
//     description: 'requested users email',
//   })
//   @IsEmail({}, { message: 'Email is incorrect' })
//   @IsString({ message: 'Email must be string' })
//   to: string;
// }

export class ResetEmailDto extends PickType(SendEmailDto, ['to'] as const) {}
