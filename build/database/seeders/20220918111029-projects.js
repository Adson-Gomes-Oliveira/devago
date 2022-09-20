'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('project', [
      {
        id: 1,
        title: 'Maratonei!',
        description: 'O Maratonei! é um site geek com a função de encontrar filmes, series, bem como informar sobre onde podem ser assitidos, além disso possui seção de reviews, notas, e muito mais.',
        link_to_repo: 'https://github.com/Adson-Gomes-Oliveira/Maratonei',
        link_to_prod: 'https://maratonei.vercel.app',
        thumbnail: '',
        status: Sequelize.literal('DEFAULT'),
        created_at: Sequelize.literal('DEFAULT'),
        updated_at: Sequelize.literal('DEFAULT'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('project', null, {});
  }
};
