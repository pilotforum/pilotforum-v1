import Question from '../models/Question';
import Tag from '../models/Tag';
import normalizeTag from '../../utils/normalizeTag';
const { map } = require('p-iteration');

class QuestionController {
  async index(req, res) {
    const questions = await Question.findAll({
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
      const tagIds = await verifyTags();
      question.setTags(tagIds);
    }
    async function verifyTags() {
      const result = await map(tags, async (tag) => {
        const id = await searchTag(normalizeTag(tag));
        return id;
      });
      return result;
    }

    async function searchTag(name) {
      const response = await Tag.findOrCreate({ where: { name } });
      const { id } = response[0].dataValues;
      return id;
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
