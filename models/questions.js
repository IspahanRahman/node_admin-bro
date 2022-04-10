module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('questions', {
        question_information_id: {
            type: DataTypes.INTEGER
        },
        question_number: {
            type: DataTypes.INTEGER
        },
        question_section: {
            type: DataTypes.STRING
        },
        question: {
            type: DataTypes.STRING
        },
        question_marks: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true
    })
    return Questions
}