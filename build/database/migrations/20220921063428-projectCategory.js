'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projectCategories', {
      projectId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'projects',
          key: 'id',
        },
        allowNull: false,
        field: 'project_id',
        onDelete: 'CASCADE',
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        allowNull: false,
        field: 'category_id',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('projectCategories');
  }
};
