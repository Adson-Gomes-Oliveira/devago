'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projectCategories', [
      {
        project_id: 1,
        category_id: 6
      },
      {
        project_id: 1,
        category_id: 14
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('projectCategories', null, {});
  }
};
