import Question from '../models/Question';

class UserQuestionController {
  async index(req, res) {
    const { studentId } = req.params;

    const questions = await Question.findAll({ where: { studentId } });

    return res.json(questions);
  }
}

export default new UserQuestionController();
