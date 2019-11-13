import { map } from 'p-iteration'
import Question from '../models/Question';
import Answer from '../models/Answer';
import Subject from '../models/Subject';
import Tag from '../models/Tag';

class SubjectQuestionController {
  async index(req, res) {
    const { subjectId } = req.params;

    const questions = await Question.findAll({
      include: [
        {
          model: Subject,
          as: 'subject',
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
      where: {
        subjectId,
      },
    });

    return res.json(questions);
  }
}

export default new SubjectQuestionController();
