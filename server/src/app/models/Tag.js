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
    this.belongsToMany(models.Question, {
      through: 'questions_tags',
      as: 'questions',
      foreignKey: 'tag_id',
    });
  }
}

export default Tag;
