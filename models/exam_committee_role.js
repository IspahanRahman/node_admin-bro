module.exports = (sequelize, DataTypes) => {
    const Exam_Committee_Role = sequelize.define("exam_committee_roles", {
        role_type: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    })
    return Exam_Committee_Role
}