module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('sessions', {
        session:{
            type:DataTypes.STRING
        }
      
    }, {
        timestamps: true
    })
    return Sessions
}