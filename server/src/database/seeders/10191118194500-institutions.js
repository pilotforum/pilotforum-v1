'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('institutions', [
      {
        cnpj: "18520164000105",
        company_name: "Udesc",
        trading_name: "Fundação Universidade do Estado de Santa Catarina",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    const institutions = await queryInterface.sequelize.query(
      `SELECT id FROM institutions;`
    );

    const institutionRows = institutions[0];

    await queryInterface.bulkInsert('courses', [
      {
        institution_id: institutionRows[0].id,
        name: "Bacharelado em Engenharia de Software",
        description: "O curso de Bacharelado em Engenharia de Software visa formar profissionais aptos a produzir sistemas de alta qualidade, softwares seguros e de alto desempenho para as diversas áreas de negócio.",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    const courses = await queryInterface.sequelize.query(
      `SELECT id FROM courses;`
    );

    const courseRows = courses[0];

    await queryInterface.bulkInsert('students', [{
      name: 'Mário Fronza',
      user_name: 'MarioFronza',
      email: 'mario@gmail.com',
      enrollment: '5105011731',
      password_hash: '123123',
      created_at: new Date(),
      updated_at: new Date(),
      course_id: courseRows[0].id,
    }], {});

    await queryInterface.bulkInsert('subjects', [
      {
        course_id: courseRows[0].id,
        name: "Arquitetura de Computadores",
        description: "Sistemas numéricos. Lógica digital. Sistemas lógicos. Organização de computadores.Barramento, comunicações, interfaces e periféricos. Organização de memória.Representação de dados no nível de máquina. Multiprocessadores e arquiteturasalternativas.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: courseRows[0].id,
        name: "Comunicação e Expressão",
        description: "Noção de língua como discurso social dialógica e ideologicamente constituído. Estratégia de organização, articulação dialógica e de produção de textos específicos acada gênero. Paráfrase.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: courseRows[0].id,
        name: "Fundamentos de Administração",
        description: "Administração como ciência e técnica. Funções da administração. Princípios gerais da administração.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: courseRows[0].id,
        name: "Fundamentos de Engenhariade Software",
        description: "Estrutura universitária. Estrutura do curso. Definição de sistema, software e engenharia de software.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: courseRows[0].id,
        name: "Introdução à Programação",
        description: "Processo de solução de problemas. Variáveis. Constantes. Tipos primitivos.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        course_id: courseRows[0].id,
        name: "Matemática Discreta",
        description: "Teoria dos Conjuntos: definições, representação dos conjuntos, relações e operações.",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('institutions', null, {});
    await queryInterface.bulkDelete('courses', null, {});
    await queryInterface.bulkDelete('students', null, {});
    await queryInterface.bulkDelete('subjects', null, {});
  }
};
