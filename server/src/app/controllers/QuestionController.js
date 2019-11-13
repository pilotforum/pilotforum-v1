const { map } = require('p-iteration');
import Question from '../models/Question';
import Answer from '../models/Answer';
import Tag from '../models/Tag';
import Subject from '../models/Subject';
import normalizeTag from '../../utils/normalizeTag';

class QuestionController {
  async index(req, res) {
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
      order: [['createdAt', 'DESC']],
    });

    return res.json(questions);
  }

  async show(req, res) {
    const { id } = req.params;
    const question = await Question.findOne({
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
        id
      }
    });

    return res.json(question);
  }

  async store(req, res) {
    const { tags, ...data } = req.body;

    const subject = await Subject.findByPk(data.subjectId);
    if (!subject) {
      return res.status(400).json({ error: 'Matéria não encontrada!' });
    }

    const questionData = {
      studentId: req.userId,
      ...data,
    };

    const question = await Question.create(questionData);
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
