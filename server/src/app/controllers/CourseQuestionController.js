import Question from '../models/Question';
import Course from '../models/Course';
import Subject from '../models/Subject';
import Tag from '../models/Tag';

class CourseQuestionController {
  async index(req, res) {
    const { courseId } = req.params;

    const questions = await Question.findAll({
      include: [
        {
          model: Subject,
          as: 'subject',
          include: [
            {
              model: Course,
              as: 'course',
            },
          ],
          where: {
            courseId,
          },
        },
        {
          model: Tag,
          as: 'tags',
          through: {
            attributes: [],
          },
        },
        {
          association: 'answers',
        },
      ],
    });

    return res.json(questions);
  }
}

export default new CourseQuestionController();
