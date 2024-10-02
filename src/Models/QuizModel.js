const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/db'); 

const Quiz = sequelize.define('QuizClass', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    descript: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Quiz.sync();

module.exports = Quiz;
