import Tag from '../models/Tag';

class TagController {
  async index(req, res) {
    const tags = await Tag.findAll();
    return res.json(tags);
  }

  async store(req, res) {
    const tag = await Tag.create(req.body);
    return res.json(tag);
  }
}

export default new TagController();
