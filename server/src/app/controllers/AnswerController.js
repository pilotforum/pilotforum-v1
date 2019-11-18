import Answer from '../models/Answer';
import Student from '../models/Student';

class AnswerController {
  async index(req, res) {
    const answers = await Answer.findAll();
    return res.json(answers);
  }

  async show(req, res) {
    const answer = await Answer.findByPk(req.params.id);
    return res.json(answer);
  }

  async store(req, res) {
    const { body } = req;
    const answerData = {
      studentId: req.userId,
      ...body,
    };

    let answer = await Answer.create(answerData);
    answer = await Answer.findByPk(answer.id, {
      include: [
        {
          association: 'student',
          attributes: ['id', 'name']
        }
      ]
    })
    return res.json(answer);
  }

  async update(req, res) {
    const answer = await Answer.findByPk(req.params.id);
    await answer.update(req.body);
    return res.json(answer);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await Answer.destroy({
      where: {
        id,
      },
    });
    return res.send();
  }
}

export default new AnswerController();
