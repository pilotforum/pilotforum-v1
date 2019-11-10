import { Model, Sequelize } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: ['student_id', 'studentId'],
      as: 'student',
    });
    this.belongsTo(models.Question, {
      foreignKey: ['question_id', 'questionId'],
      as: 'question',
    });
  }
}

export default Answer;
