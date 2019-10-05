import Sequelize from 'sequelize';
import User from '../app/models/User';
import Institution from '../app/models/Institution';
import Course from '../app/models/Course';
import Subject from '../app/models/Subject';
import databaseConfig from '../config/database';
import Student from '../app/models/Student';

const models = [User, Institution, Course, Student, Subject];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
