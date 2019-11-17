import Student from '../models/Student';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const student = await Student.findOne({ where: { email } });
    if (!student) {
      return res.status(401).json({ error: 'Student not found' });
    }

    if (!(await student.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    return res.json({
      token: student.generateToken(student.id),
      student: {
        id: student.id,
        name: student.userName,
        email: student.email,
        courseId: student.courseId,
      },
    });
  }
}

export default new SessionController();
