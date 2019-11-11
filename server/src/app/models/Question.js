import { Model, Sequelize } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        score: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
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
    this.belongsTo(models.Subject, {
      foreignKey: ['subject_id', 'subjectId'],
      as: 'subject',
    });
    this.belongsToMany(models.Tag, {
      through: 'questions_tags',
      as: 'tags',
      foreignKey: 'question_id',
    });
  }
}

export default Question;
