import { Module } from '@nestjs/common';
import { ProdutoService } from './service/produto.service';
import { ProdutoController } from './controller/produto.controller';
import { Produto } from './entity/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [ProdutoService],
})
export class ProdutoModule {}
