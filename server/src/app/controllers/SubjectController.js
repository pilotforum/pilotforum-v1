import Subject from '../models/Subject';

class SubjectController {
  async index(req, res) {
    const subjects = await Subject.findAll();
    return res.json(subjects);
  }

  async show(req, res) {
    const subject = await Subject.findByPk(req.params.id);
    return res.json(subject);
  }

  async store(req, res) {
    const subject = await Subject.create(req.body);
    return res.json(subject);
  }

  async update(req, res) {
    const subject = await Subject.findByPk(req.params.id);
    await subject.update(req.body);
    return res.json(subject);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await Subject.destroy({
      where: {
        id,
      },
    });
    return res.send();
  }
}

export default new SubjectController();
