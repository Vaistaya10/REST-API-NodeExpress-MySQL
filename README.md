# Procedimientos para implementacion #

1. Clonar repositorio
```
git clone (url)
```

2. Reconstruir node_modules
```
npm install
```

3. Cosntruir el archivo .env

```
DB_HOST= 
DB_PORT= 
DB_PASSWORD= 
DB_USER= 
DB_NAME= 
```

4. Restaure la BD (db > database.sql)
```sql
CREATE DATABASE appstore;
use appstore;

create table softwares(
id          int  AUTO_INCREMENT PRIMARY KEY,
nombre      varchar(50) NOT NULL,
espaciomb   SMALLINT not null,
versionsoft varchar(20) NOT NULL,
precio      DECIMAL(7,2) not null
)ENGINE = INNODB;
```
5. ejecute el proyecto:

```
npm run dev
```
