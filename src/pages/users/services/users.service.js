// userService.js
const User = require('../models/User');

class UserService {
  async createUser(userData) {
    return User.create(userData);
  }

  async getUserById(userId) {
    return User.findByPk(userId);
  }

  async updateUser(userId, newData) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return user.update(newData);
  }

  async deleteUser(userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
  }
}

module.exports = new UserService();
