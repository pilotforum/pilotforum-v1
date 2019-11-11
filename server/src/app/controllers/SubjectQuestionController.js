import Question from '../models/Question';
import Subject from '../models/Subject';

class SubjectQuestionController {
  async index(req, res) {
    const { subjectId } = req.params;

    const questions = await Question.findAll({
      include: [
        {
          model: Subject,
          as: 'subject',
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
