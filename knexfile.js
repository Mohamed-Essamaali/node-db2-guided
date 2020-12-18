// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // flag required by sqlite
    connection: {
      filename: './data/produce.db3' // location of database
    },
  },

  
};
