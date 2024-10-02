const quizService = require('../Services/QuziService');

const quizController = {


   
    async getAllQuizClass(req, res) {
        try {
            const user = await quizService.getAllQuizClass();
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // async updateUser(req, res) {
    //     try {
    //         const [updated] = await userService.updateUser(req.params.id, req.body);
    //         if (!updated) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.json({ message: 'User updated successfully' });
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // },

    // async deleteUser(req, res) {
    //     try {
    //         const deleted = await userService.deleteUser(req.params.id);
    //         if (!deleted) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // },
};

module.exports = quizController;
