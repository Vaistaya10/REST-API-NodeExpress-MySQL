-- Active: 1746797497505@@127.0.0.1@3306@appstore
CREATE DATABASE appstore;
use appstore;

create table softwares(
id          int  AUTO_INCREMENT PRIMARY KEY,
nombre      varchar(50) NOT NULL,
espaciomb   SMALLINT not null,
versionsoft varchar(20) NOT NULL,
precio      DECIMAL(7,2) not null
)ENGINE = INNODB;

insert into softwares(nombre,espaciomb,versionsoft,precio) values
('Google Chrome', 200, '1.0', 10.00),
('Mozilla Firefox', 150, '1.0', 110.00),
('Microsoft Edge', 250, '1.0', 10.00),
('Adobe Reader', 300, '1.0', 10.00),
('VLC Media Player', 500, '1.0', 110.00),
('WinRAR', 100, '1.0', 20.00),
('7-Zip', 50, '1.0', 220.00),
('Notepad++', 200, '1.0', 220.00),
('Visual Studio Code', 400, '1.0', 220.00),
('Skype', 300, '1.0', 220.00);

select * from softwares;