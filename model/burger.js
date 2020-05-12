const orm = require('../config/orm');

const burger = {
  async selectAll() {
    return orm.selectAll('burgers');
  },
  async insertBurger(burgerName) {
    return orm.insertOne('burgers', ['burger_name', 'devoured'], [burgerName, false]);
  },
  async updateBurger(id, devouredStatus) {
    return orm.updateOne('burgers', 'devoured', devouredStatus, 'id', id);
  },
};

module.exports = burger;
