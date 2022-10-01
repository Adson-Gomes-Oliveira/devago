'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'FRONTEND',
        type: 'label',
      },
      {
        id: 2,
        name: 'BACKEND',
        type: 'label',
      },
      {
        id: 3,
        name: 'FULLSTACK',
        type: 'label',
      },
      {
        id: 6,
        name: 'REACT',
        type: 'tech',
      },
      {
        id: 7,
        name: 'REDUX',
        type: 'tech',
      },
      {
        id: 9,
        name: 'DOCKER',
        type: 'tech',
      },
      {
        id: 10,
        name: 'NODE',
        type: 'tech',
      },
      {
        id: 11,
        name: 'SQL',
        type: 'tech',
      },
      {
        id: 12,
        name: 'EXPRESS',
        type: 'tech',
      },
      {
        id: 13,
        name: 'SEQUELIZE',
        type: 'tech',
      },
      {
        id: 14,
        name: 'JAVASCRIPT',
        type: 'tech',
      },
      {
        id: 15,
        name: 'TYPESCRIPT',
        type: 'tech',
      },
      {
        id: 16,
        name: 'TAILWIND-CSS',
        type: 'tech',
      },
      {
        id: 17,
        name: 'STYLED-COMPONENTS',
        type: 'tech',
      },
      {
        id: 18,
        name: 'BOOTSTRAP',
        type: 'tech',
      },
      {
        id: 19,
        name: 'MATERIAL-UI',
        type: 'tech',
      },
    ], {
      timestamps: false,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
