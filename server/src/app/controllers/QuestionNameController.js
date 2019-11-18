const { Op } = require('sequelize');
import Question from '../models/Question';
import Tag from '../models/Tag';

class QuestionNameController {
  async index(req, res) {
    const { title } = req.query
    const questions = await Question.findAll({
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
      where: {
        title: {
          [Op.iLike]: `%${title}%`
        }
      },
      order: [['createdAt', 'DESC']],
    });

    return res.json(questions);
  }
}

export default new QuestionNameController();
