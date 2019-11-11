import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        userName: Sequelize.STRING,
        email: Sequelize.STRING,
        enrollment: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        passwordHash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.passwordHash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  generateToken(id) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.passwordHash);
  }

  static associate(models) {
    this.belongsTo(models.Course, {
      foreignKey: ['course_id', 'courseId'],
      as: 'course',
    });
  }
}

export default Student;
