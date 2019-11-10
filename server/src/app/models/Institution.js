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
}

export default Institution;
