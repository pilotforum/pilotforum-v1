import Subject from '../models/Subject';

class SubjectCourseController {
  async show(req, res) {
    const { courseId } = req.params;

    const subjects = await Subject.findAll({
      where: { courseId }
    });
    return res.json(subjects);
  }
}

export default new SubjectCourseController();
