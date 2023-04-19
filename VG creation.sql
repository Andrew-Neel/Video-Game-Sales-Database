drop table if exists VG_sales;
drop table if exists VG_data;
drop table if exists VG_game;

create table VG_game(
	game_ID bigint auto_increment,
    name varchar(150),
    platform varchar(4),
    constraint vg_game_game_ID_pk primary key(game_ID)
);

create table VG_data(
	game_ID bigint auto_increment,
    game_rank bigint,
    year varchar(4),
    genre varchar(14),
	publisher varchar(100),
    constraint vg_data_game_ID_pk primary key(game_ID),
    constraint vg_data_game_ID_fk foreign key(game_ID) references VG_game(game_ID)
);

create table VG_sales(
	game_ID bigint auto_increment,
    na_sales double(4,2),
	eu_sales double(4,2),
	jp_sales double(4,2),
	other_sales double(4,2),
	global_sales double(4,2),
    constraint vg_sales_game_ID_pk primary key(game_ID),
    constraint vg_sales_game_ID_fk foreign key(game_ID) references VG_game(game_ID)
);

insert into VG_game(name, platform)
select vg_csv.name, vg_csv.platform
from vg_csv;

insert into VG_data(game_rank, year, genre, publisher)
select vg_csv.Rank, vg_csv.Year, vg_csv.Genre, vg_csv.Publisher
from vg_csv;

insert into VG_sales(na_sales, eu_sales, jp_sales, other_sales, global_sales)
select na_sales, eu_sales, jp_sales, other_sales, global_sales 
from vg_csv;

select * from VG_game;
select * from VG_data;
select * from VG_sales;
select * from vg_csv;