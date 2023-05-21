'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {name: 'GIT'},
      {name: 'REACT'},
      {name: 'REDUX'},
      {name: 'JAVASCRIPT'},
      {name: 'TYPESCRIPT'},
      {name: 'NODE'},
      {name: 'SEQUELIZE'},
      {name: 'MYSQL'},
      {name: 'MONGODB'},
      {name: 'REDIS'},
      {name: 'EXPRESS'},
      {name: 'RABBITMQ'},
      {name: 'PYTHON'},
      {name: 'TESTS'},
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
