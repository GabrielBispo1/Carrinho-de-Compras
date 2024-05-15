create database bd_Carrinho_Compras;

use bd_Carrinho_Compras;

CREATE TABLE Login (
  id_login INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(40) UNIQUE,
  senha VARCHAR(40),
  PRIMARY KEY(id_login)
);

CREATE TABLE Perfil (
  id_login INTEGER UNSIGNED NOT NULL PRIMARY KEY,
  id_endereco INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(40) NULL,
  dadosPessoais VARCHAR (1) NULL,
  endereco VARCHAR(40) NULL,
  cidade VARCHAR(40) NULL,
  estado VARCHAR (2) NULL,
  bairro VARCHAR (40) NULL,
  numero VARCHAR(4) NULL,
  CEP VARCHAR(9) NULL,
  CPF VARCHAR (14) NULL,
  RG VARCHAR (12) NULL,
  telefone VARCHAR (14) NULL,
  FOREIGN KEY (id_login)
	REFERENCES Login(id_login),
  KEY (id_endereco)
);

CREATE TABLE TicketCompra (
  id_ticket INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  id_login INTEGER UNSIGNED NOT NULL,
  total NUMERIC(10,2) NULL,
  PRIMARY KEY(id_ticket),
  FOREIGN KEY (id_login)
	REFERENCES Login(id_login)
);

CREATE TABLE Produto (
  id_produto INTEGER UNSIGNED NOT NULL,
  nome VARCHAR (40),
  valor DOUBLE,
  qtdProduto INTEGER,
  descricao VARCHAR (100),
  PRIMARY KEY(id_produto)
);

CREATE TABLE Item (
  id_ticket INTEGER UNSIGNED NOT NULL,
  id_produto INTEGER UNSIGNED NOT NULL,
  valor DOUBLE NULL,
  qtdItem INTEGER NULL,
  PRIMARY KEY (id_ticket, id_produto),
  FOREIGN KEY (id_ticket)
	REFERENCES TicketCompra(id_ticket),
  FOREIGN KEY (id_produto)
	REFERENCES Produto(id_produto)
);

CREATE TABLE Frete (
  id_ticket INTEGER UNSIGNED NOT NULL,
  id_endereco INTEGER UNSIGNED NOT NULL,
  valor DOUBLE,
  CEP_remetente VARCHAR(9),
  PRIMARY KEY (id_ticket, id_endereco),
  FOREIGN KEY (id_ticket)
	REFERENCES TicketCompra(id_ticket),
  FOREIGN KEY (id_endereco)
	REFERENCES Perfil(id_endereco)
);



