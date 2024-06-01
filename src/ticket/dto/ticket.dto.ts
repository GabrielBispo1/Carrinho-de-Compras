import { IsInt, IsNumber, IsString, Length} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class TicketDto {}

export class CreateTicketDto {
    @ApiProperty({ description: 'Valor total da compra' })
    @IsNumber()
    total: number;

    @ApiProperty({ description: 'Valor frete da compra' })
    @IsNumber()
    frete: number;

    @ApiProperty({ description: 'endereco do remetente' })
    @IsString()
    @Length(40)
    endereco: string;

    @ApiProperty({ description: 'CEP do remetente' })
    @IsString()
    @Length(9)
    CEP_remetente: string;

    @ApiProperty({ description: 'ID login do usuário' })
    @IsInt()
    loginId: number;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}