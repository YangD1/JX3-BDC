'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
   const { INTEGER, DATE, STRING } = Sequelize
   await queryInterface.createTable('users',{
     id: { type: INTEGER, primaryKey: true, autoIncrement: true, unique: true },
     email: {type: STRING(100), unique: true },
     password: STRING(100),
     ip: STRING(50),
     created_at: DATE,
     updated_at: DATE
   })
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
