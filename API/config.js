const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "node",
    password: "",
    database: "vgsales",
  },
  listPerPage: 10,
};
module.exports = config;
