create database dbApiDispositivos;
use dbApiDispositivos;

create table dispositivos(
	id int primary key auto_increment,
    category varchar(128),
    color varchar(16),
    partNumber int
);

insert into dispositivos (category, color, partNumber) values ('Cadeira', 'azul', '123321');
insert into dispositivos (category, color, partNumber) values ('Mesa', 'Preta', '112233');
select * from dispositivos;