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

    @ApiProperty({ description: 'Cartão de crédito da compra ' })
    @IsString()
    @Length(13,16)
    cartao_credito: string;

    @ApiProperty({ description: 'Cartão de débito da compra' })
    @IsString()
    @Length(13,19)
    cartao_debito: string;

    @ApiProperty({ description: 'Boleto da compra' })
    @IsString()
    @Length(48)
    boleto: string;

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