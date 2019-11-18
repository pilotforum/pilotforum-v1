import Student from '../models/Student';
import Course from '../models/Course';
import Institution from '../models/Institution';

class StudentController {
  async store(req, res) {
    const student = await Student.create(req.body);
    return res.json(student);
  }

  async show(req, res) {
    const student = await Student.findOne({
      where: { id: req.params.id },
      attributes: ['name', 'email', 'enrollment'],
      include: [
        {
          model: Course,
          as: 'course',
          include: [
            {
              model: Institution,
              as: 'institution',
              attributes: ['id', 'tradingName']
            },
          ],
          attributes: ['id', 'name']
        },
      ],
    });

    if (!student) {
      return res.json({ error: 'User not found' });
    }

    const institutions = await Institution.findAll();
    const courses = await Course.findAll({ where: { institution_id: student.course.institution.id } });

    const auxIns = institutions.map(item => ({
      label: item.tradingName,
      value: item.id
    }))

    const auxCourses = courses.map(item => ({
      label: item.name,
      value: item.id
    }));

    return res.json({
      student,
      institutions: auxIns,
      courses: auxCourses
    });
  }

  async update(req, res) {
    let { password, name, userName, email, enrollment, courseId } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (!password) {
      password = student.password;
    }

    await student.update({
      password,
      name,
      userName,
      email,
      enrollment,
      courseId
    });
    return res.json(student);
  }
}

export default new StudentController();
