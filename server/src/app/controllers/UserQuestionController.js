import Question from '../models/Question';
import Tag from '../models/Tag';

class UserQuestionController {
  async index(req, res) {
    const { studentId } = req.params;

    const questions = await Question.findAll({
      include: [
        {
          model: Tag,
          as: 'tags',
          through: {
            attributes: [],
          },
        },
      ],
      where: { studentId },
    });

    return res.json(questions);
  }
}

export default new UserQuestionController();
