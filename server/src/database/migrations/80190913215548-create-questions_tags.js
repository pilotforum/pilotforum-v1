module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions_tags', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: { model: 'questions', keys: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        unique: true,
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references: { model: 'tags', keys: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('questions_tags');
  },
};
