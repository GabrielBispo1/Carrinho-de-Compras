import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/controller/produto.controller';
//import { FreteModule } from './frete/frete.module';

@Module({
  imports: [DatabaseModule, ProdutoModule],
  controllers: [AppController, ProdutoController],
  providers: [AppService],
})
export class AppModule {}
