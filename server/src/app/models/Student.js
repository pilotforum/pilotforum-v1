import { Model, Sequelize } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        enrollment: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: ['user_id', 'userId'],
      as: 'user',
    });
    this.belongsTo(models.User, {
      foreignKey: ['course_id', 'courseId'],
      as: 'course',
    });
  }
}

export default Student;
