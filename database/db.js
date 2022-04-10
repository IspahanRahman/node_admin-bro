const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('user', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 10000 }
})

sequelize.authenticate()
    .then(() => {
        console.log('databse connect success')
    })
    .catch(error => {
        console.log('error ' + error)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync databse')
    })
db.students=require('../models/Student')(sequelize,DataTypes)
db.question_informations = require('../models/question_infromations')(sequelize, DataTypes)
db.questions = require('../models/questions')(sequelize, DataTypes)
db.courses = require('../models/course')(sequelize, DataTypes);
db.sessions = require('../models/session')(sequelize, DataTypes);
db.exam_committee_roles = require('../models/exam_committee_role')(sequelize, DataTypes)
db.exam_committee = require('../models/exam_committee')(sequelize, DataTypes)
db.exam_committee_members = require('../models/exam_committee_members')(sequelize, DataTypes)
db.course_instructors = require('../models/course_instructor')(sequelize, DataTypes)
// one to many relation between question_informations table and questions table
db.sessions.hasMany(db.courses, { foreignKey: 'session_name' })
db.courses.belongsTo(db.sessions, { foreignKey: 'session_name' })
db.question_informations.hasMany(db.questions, { foreignKey: 'question_information_id' });
db.questions.belongsTo(db.question_informations, { foreignKey: 'question_information_id' })

// many to many relation between users, exam committee role, exam committee, exam committee members
// db.exam_committee.hasMany(db.exam_committee_members, { foreignKey: 'exam_committee_id' })
// db.exam_committee_members.belongsTo(db.exam_committee, { foreignKey: 'exam_committee_id' })
// db.exam_committee_members.belongsTo(db.users, { foreignKey: 'member_id' })
// db.exam_committee_members.belongsTo(db.exam_committee_roles, { foreignKey: 'member_role' })

module.exports = db