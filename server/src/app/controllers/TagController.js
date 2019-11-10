import Tag from '../models/Tag';
import normalizeTag from '../../utils/normalizeTag';

class TagController {
  async index(req, res) {
    const tags = await Tag.findAll();
    return res.json(tags);
  }

  async store(req, res) {
    let { name } = req.body;
    name = normalizeTag(name);

    const tag = await Tag.findOrCreate({ where: { name } });
    return res.json(tag);
  }
}

export default new TagController();
