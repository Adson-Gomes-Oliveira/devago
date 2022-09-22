'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'FRONT-END',
      },
      {
        id: 2,
        name: 'BACK-END',
      },
      {
        id: 3,
        name: 'FULL-STACK',
      },
      {
        id: 4,
        name: 'DEV-DIARY',
      },
      {
        id: 5,
        name: 'HTML/CSS',
      },
      {
        id: 6,
        name: 'REACT.js',
      },
      {
        id: 7,
        name: 'REDUX'
      },
      {
        id: 8,
        name: 'FRAMEWORK-CSS',
      },
      {
        id: 9,
        name: 'DOCKER',
      },
      {
        id: 10,
        name: 'NODE.js',
      },
      {
        id: 11,
        name: 'SQL',
      },
      {
        id: 12,
        name: 'EXPRESS',
      },
      {
        id: 13,
        name: 'SEQUELIZE',
      },
      {
        id: 14,
        name: 'JAVASCRIPT',
      },
      {
        id: 15,
        name: 'TYPESCRIPT',
      },
      {
        id: 17,
        name: 'DEPLOY'
      },
      {
        id: 18,
        name: 'CLEAN-CODE-AND-ARCHITECTURE'
      },
      {
        id: 19,
        name: 'VARIED',
      },
    ], {
      timestamps: false,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
