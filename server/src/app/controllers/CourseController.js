import Course from '../models/Course';

class CourseController {
  async index(req, res) {
    const courses = await Course.findAll();
    return res.json(courses);
  }

  async show(req, res) {
    const course = await Course.findByPk(req.params.id);
    return res.json(course);
  }

  async store(req, res) {
    const course = await Course.create(req.body);
    return res.json(course);
  }

  async update(req, res) {
    const course = await Course.findByPk(req.params.id);
    await course.update(req.body);
    return res.json(course);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await Course.destroy({
      where: {
        id,
      },
    });
    return res.send();
  }
}

export default new CourseController();
