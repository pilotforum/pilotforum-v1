import { Model, Sequelize } from 'sequelize';

class Institution extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: Sequelize.STRING,
        companyName: Sequelize.STRING,
        tradingName: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userId' });
  }
}

export default Institution;
