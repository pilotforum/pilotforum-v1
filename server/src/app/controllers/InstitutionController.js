import Institution from '../models/Institution';

class InstitutionController {
  async index(req, res) {
    const institutions = await Institution.findAll();
    return res.json(institutions);
  }

  async store(req, res) {
    const institution = await Institution.create(req.body);
    return res.json(institution);
  }

  async update(req, res) {
    const institution = await Institution.findByPk(req.params.id);
    await institution.update(req.body);
    return res.json(institution);
  }
}

export default new InstitutionController();
