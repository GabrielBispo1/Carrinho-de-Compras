import { IsInt, Length} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class TicketDto {}

export class CreateTicketDto {
    @ApiProperty({ description: 'ID login do usuário' })
    @IsInt()
    id_Login: number;

    @ApiProperty({ description: 'Valor total da compra' })
    @IsInt()
    @Length(10,2)
    total: number;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}