import { Model, Sequelize } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: ['course_id', 'courseId'],
      as: 'course',
    });
  }
}

export default Subject;
