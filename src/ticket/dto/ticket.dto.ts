import { IsInt, Length} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class TicketDto {}

export class CreateTicketDto {

    @IsInt()
    id_Login: number;

    @IsInt()
    @Length(10,2)
    total: number;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}