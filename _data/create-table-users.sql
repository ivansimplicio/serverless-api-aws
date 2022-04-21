create database app;

use app;

create table users (
	id int auto_increment primary key,
    name varchar(50),
    cpf varchar(15),
    email varchar(50),
    password varchar(30),
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
);