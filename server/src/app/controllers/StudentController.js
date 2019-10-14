import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const student = await Student.create(req.body);
    return res.json(student);
  }

  async update(req, res) {
    const student = await Student.findByPk(req.params.id);
    await student.update(req.body);
    return res.json(student);
  }
}

export default new StudentController();
