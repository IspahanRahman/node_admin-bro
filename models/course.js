module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('courses', {
        department_name:{
            type:DataTypes.STRING
        },
        session_name:{
            type:DataTypes.STRING
        },
        course_code: {
            type: DataTypes.STRING
        },
        course_title: {
            type: DataTypes.TEXT
        },
        course_type:{
            type:DataTypes.STRING
        },
        theory_credit: {
            type: DataTypes.DOUBLE
        },
        lab_credit: {
            type: DataTypes.DOUBLE
        },
        total_credit:{
            type:DataTypes.DOUBLE
        },
        continuous_evaluation:{
            type:DataTypes.DOUBLE
        },
        attendence:{
            type:DataTypes.DOUBLE
        },
        see:{
            type:DataTypes.DOUBLE
        },
        se:{
            type:DataTypes.DOUBLE
        },
        total_mark:{
            type:DataTypes.DOUBLE
        }
      
    }, {
        timestamps: true
    })
       
    return Courses
}