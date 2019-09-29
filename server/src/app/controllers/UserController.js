import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {}
}

export default new UserController();
