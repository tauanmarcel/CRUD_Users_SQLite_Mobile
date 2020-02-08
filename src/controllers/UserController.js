import User from '../models/User';

class UserController {
  index() {
    const users = User.findAll();

    return users;
  }

  store(name, email) {
    const user = User.find({
      where: {
        email: email,
      },
    });

    if (user) {
      return {
        erro: true,
        status: 401,
        message: 'O e-mail informado já está cadastrado',
      };
    }

    User.create(name, email);
  }

  clear() {
    User.drop();
  }
}

export default new UserController();
