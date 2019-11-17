import Question from '../models/Question';
import Tag from '../models/Tag';

class UserQuestionController {
  async index(req, res) {
    const { userId } = req.params;

    const questions = await Question.findAll({
      where: {
        student_id: userId
      },
      include: [
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

export default new UserQuestionController();
