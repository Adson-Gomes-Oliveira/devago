'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projectCategories', [
      {
        project_id: 1,
        category_id: 1
      },
      {
        project_id: 1,
        category_id: 3
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('projectCategories', null, {});
  }
};
