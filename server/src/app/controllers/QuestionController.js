import Question from '../models/Question';

class QuestionController {
  async index(req, res) {
    const questions = await Question.findAll();
    return res.json(questions);
  }

  async show(req, res) {
    const question = await Question.findByPk(req.params.id);
    return res.json(question);
  }

  async store(req, res) {
    const question = await Question.create(req.body);
    return res.json(question);
  }

  async update(req, res) {
    const question = await Question.findByPk(req.params.id);
    await question.update(req.body);
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
