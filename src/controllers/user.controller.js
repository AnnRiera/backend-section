let _userservice = null;

class UserController {
    constructor({ UserService }) {
        _userservice = UserService; //Sin el this es tipo privado.
    }

    async get(req, res) {
        const {userId} = req.params; 
        const user = await _userservice.get(userId);
        return res.send(user);
    }

    async getAll(req, res) {
        const users = await _userservice.getAll();
        return res.send(users);
    }

    async update(req, res) {
        const { body } = req;
        const userId = req.params;
        const updatedUser = await _userservice.update(userId, body);
        return res.send(updatedUser);
    }

    async delete(req, res) {
        const { userId } = req.params;
        const deletedUser = await _userservice.delete(userId);
        return res.send(deletedUser);
    }
}

module.exports = UserController;