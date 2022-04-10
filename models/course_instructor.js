module.exports = (sequelize, DataTypes) => {
    const Course_Instructor = sequelize.define('course_instractors', {
        user_id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        course_id: {
            type: DataTypes.INTEGER
        },
        instructor_role: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Course_Instructor
}