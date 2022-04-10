module.exports = (sequelize, DataTypes) => {
    const Exam_Committee_Members = sequelize.define("exam_committee_members", {
        exam_committee_id: {
            type: DataTypes.INTEGER
        },
        member_id: {
            type: DataTypes.STRING
        },
        member_role: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: true
    })
    return Exam_Committee_Members
}