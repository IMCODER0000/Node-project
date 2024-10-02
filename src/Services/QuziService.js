
const QuizClass = require('../Models/QuizModel');


const quizService = {
    async createUser(userData) {
        const user = new Quiz(userData);
        return await user.save();
    },

    async getAllQuizClass() {
        try {
            const quizClasses = await QuizClass.findAll(); 
            if(quizClasses==null){
                return null;
            }
            return quizClasses;
            
        } catch (error) {
            console.error('Error fetching quiz classes:', error);
            throw error;
        }
        
    },
    

    async updateUser(userId, userData) {
        return await Quiz.update(userData, { where: { id: userId } });
    },

    async deleteUser(userId) {
        return await Quiz.destroy({ where: { id: userId } });
    },
};

module.exports = quizService;
