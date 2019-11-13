import Tag from '../models/Tag';
import Question from '../models/Question';

class TagQuestionController {
  async index(req, res) {
    const { tagName } = req.params;

    const questions = await Question.findAll({
      include: [
        {
          model: Tag,
          as: 'tags',
          through: {
            attributes: ['name'],
          },
          where: {
            name: tagName,
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

export default new TagQuestionController();
