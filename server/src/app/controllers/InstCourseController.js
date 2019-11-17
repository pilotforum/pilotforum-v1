import Course from '../models/Course';

class InstCourseController {
  async show(req, res) {
    const { institutionId } = req.params;

    const courses = await Course.findAll({ where: { institutionId } });
    return res.json(courses);
  }
}

export default new InstCourseController();
