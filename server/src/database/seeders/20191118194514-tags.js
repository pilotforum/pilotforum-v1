'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [
      {
        name: "Java",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Node.js",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Requisitos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Banco de dados",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Padrões de Projeto",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Igor teste",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Python",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Javascript",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Empreendedorismo",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Arquitetura de Software",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags', null, {});
  }
};
