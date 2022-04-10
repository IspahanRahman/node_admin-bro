module.exports = (sequelize, DataTypes) => {
    const Question_Informations = sequelize.define('question_informations', {
        question_type: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.STRING
        },
        semester: {
            type: DataTypes.STRING
        },
        session: {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        course_title: {
            type: DataTypes.STRING
        },
        course_code: {
            type: DataTypes.STRING
        },
        full_marks: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })

    return Question_Informations
}