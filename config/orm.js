const connection = require('./connection');

const orm = {
  async selectAll(tableName) {
    const query = 'SELECT * FROM ??;';
    try {
      const [rows] = await connection.query(query, tableName);
      return rows;
    } catch (error) {
      console.error(error);
    }
  },
  async insertOne(tableName, column, value) {
    const query = 'INSERT INTO ?? (??) VALUES (?);';
    try {
      const [rows] = await connection.query(query, [tableName, column, value]);
      return rows;
    } catch (error) {
      console.error(error);
    }
  },
  async updateOne(tableName, column, columnValue, field, fieldValue) {
    const query = 'UPDATE ?? SET ??=? WHERE ??=?;';
    try {
      const [rows] = await connection.query(query, [tableName, column, columnValue, field, fieldValue]);
      return rows;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = orm;
