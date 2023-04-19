const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPlatformList(){
  const rows = await db.query(
    `SELECT platform_ID, name
    FROM VG_platform`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getGenreList(){
  const rows = await db.query(
    `SELECT genre_ID, name
    FROM VG_genre`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getPublisherList(){
  const rows = await db.query(
    `SELECT publisher_ID, name
    FROM VG_publisher`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getGameList(page = 1, genreID = 0, publisherID = 0){
  const offset = helper.getOffset(page, config.listPerPage);
  var where_genre = '';
  var where_publisher = '';
  if(genreID > 0){
    where_genre = ' AND g.genre_ID = ' + genreID;
  }
  if(publisherID > 0){
    where_publisher = ' AND g.publisher_ID = ' + publisherID;
  }
  const rows = await db.query(
    `select g.name as game, v.name as genre, p.name as publisher
	  from vg_game g join vg_genre v
    on g.genre_ID = v.genre_ID
    join vg_publisher p
    on g.publisher_ID = p.publisher_ID
    where 0 = 0 ${where_genre} ${where_publisher}
    order by game LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page, genreID, publisherID};

  return {
    data,
    meta
  }
}

module.exports = {
  getPlatformList,
  getGenreList,
  getPublisherList,
  getGameList
}
