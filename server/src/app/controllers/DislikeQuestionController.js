import Question from '../models/Question';

class DislikeQuestionController {
  async store(req, res) {
    const { id } = req.params;

    const question = await Question.findByPk(id);

    if (!question) {
      return res.status(400).json({ error: 'Pergunta não existe!' });
    }

    const { score } = question;

    if (score - 1 !== -1) {
      question.update({
        score: score - 1,
      });
    }

    return res.json(question);
  }
}

export default new DislikeQuestionController();
