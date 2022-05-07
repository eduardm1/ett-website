module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: '.tmp/test.db',
      schema: '',
    },
    useNullAsDefault: true,
    debug: false,
    pool: {
        min: 0,
        max: 1,
    }
  },
});