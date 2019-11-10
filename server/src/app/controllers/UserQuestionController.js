import Question from '../models/Question';

class UserQuestionController {
  async index(req, res) {
    const { user_id } = req.params;

    const question = await Question.findAll({
      where: {
        user_id,
      },
    });

    return res.json(question);
  }
}

export default new UserQuestionController();
