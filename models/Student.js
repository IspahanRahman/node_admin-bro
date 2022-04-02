module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('students', {
        student_roll: {
            type: DataTypes.INTEGER
        },
        student_name: {
            type: DataTypes.STRING
        },
        student_class: {
            type: DataTypes.STRING
        },
        student_session: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Students
}