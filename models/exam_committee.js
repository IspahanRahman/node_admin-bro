module.exports = (sequelize, DataTypes) => {
    const Exam_Committee = sequelize.define('exam_committees', {
        department_name: {
            type: DataTypes.STRING
        },
        session: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.STRING
        },
        semester: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Exam_Committee
}