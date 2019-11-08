import Question from '../models/Question';
import Tag from '../models/Tag';

class QuestionController {
  async index(req, res) {
    let questions;
    const { tag } = req.query;
    if (tag) {
      questions = await Question.findAll({
        include: [
          {
            model: Tag,
            as: 'tags',
            through: {
              attributes: ['name'],
            },
            where: {
              name: tag,
            },
          },
        ],
      });
    } else {
      questions = await Question.findAll({
        include: [
          {
            model: Tag,
            as: 'tags',
            through: {
              attributes: ['name'],
            },
          },
        ],
      });
    }

    return res.json(questions);
  }

  async show(req, res) {
    const question = await Question.findByPk(req.params.id);
    return res.json(question);
  }

  async store(req, res) {
    const { tags, ...data } = req.body;
    const question = await Question.create(data);
    if (tags && tags.length > 0) {
      question.setTags(tags);
    }

    return res.json(question);
  }

  async update(req, res) {
    const { tags, ...data } = req.body;

    const question = await Question.findByPk(req.params.id);
    await question.update(data);

    if (tags && tags.length > 0) {
      question.setTags(tags);
    }

    return res.json(question);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await Question.destroy({
      where: {
        id,
      },
    });
    return res.send();
  }
}

export default new QuestionController();
