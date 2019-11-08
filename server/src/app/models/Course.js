import { Model, Sequelize } from 'sequelize';

class Course extends Model {
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
    this.belongsTo(models.Institution, {
      foreignKey: ['institution_id', 'institutionId'],
      as: 'institution',
    });
  }
}

export default Course;
