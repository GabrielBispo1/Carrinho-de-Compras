import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/controller/produto.controller';
import { PerfilModule } from './perfil/perfil.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilService } from './perfil/service/perfil.service';
import { LoginService } from './login/service/login.service';
import { Login } from './login/entity/login.entity';
import { Perfil } from './perfil/entity/perfil.entity';
import { ItemModule } from './item/item.module';
import { PerfilController } from './perfil/controller/perfil.controller';
import { LoginController } from './login/controller/login.controller';
import { ItemController } from './item/controller/item.controller';
import { ItemService } from './item/service/item.service';
import { AuthModule } from './auth/auth.module';
import { Item } from './item/entity/item.entity';
import { Ticket } from './ticket/entity/ticket.entity';
import { Produto } from './produto/entity/produto.entity';
import { TicketModule } from './ticket/ticket.module';


@Module({
  imports: [TypeOrmModule.forFeature([Login, Perfil, Item, Ticket, Produto]),
    DatabaseModule, ProdutoModule, PerfilModule, LoginModule, ItemModule, AuthModule, TicketModule],
  controllers: [AppController, ProdutoController, PerfilController, LoginController, ItemController],
  providers: [AppService, PerfilService, LoginService, ItemService],
})
export class AppModule { }
