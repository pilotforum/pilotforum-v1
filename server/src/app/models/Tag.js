import { Model, Sequelize } from 'sequelize';

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
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
  }
}

export default Tag;
