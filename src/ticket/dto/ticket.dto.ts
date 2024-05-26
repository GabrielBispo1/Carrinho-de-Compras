import { IsInt, Length} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class TicketDto {}

export class CreateTicketDto {

    @IsInt({ description: 'ID do login' })
    id_Login: number;

    @IsInt({ description: 'Valor total do ticket da compra' })
    @Length(10,2)
    total: number;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}