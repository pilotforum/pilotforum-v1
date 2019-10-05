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
    this.belongsTo(models.User, {
      foreignKey: ['sutent_id', 'sutentId'],
      as: 'student',
    });
  }
}

export default Question;
