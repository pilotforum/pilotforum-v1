import { Model, Sequelize } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: ['sutent_id', 'sutentId'],
      as: 'student',
    });
    this.belongsTo(models.User, {
      foreignKey: ['question_id', 'questionId'],
      as: 'question',
    });
  }
}

export default Answer;
