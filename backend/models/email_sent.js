'use strict';
module.exports = (sequelize, DataTypes) => {
  const email_sent = sequelize.define('email_sent', {
    id_sent: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    to: DataTypes.STRING,
    from: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.TEXT,
    attachment: DataTypes.TEXT,
    isstarred: DataTypes.BOOLEAN,
    labels: DataTypes.STRING,
  }, {
      underscored: true,
      freezeTableName: true,
      // define the table's name
      tableName: 'email_sent'
  });
  email_sent.associate = function(models) {
    // associations can be defined here
  };
  return email_sent;
};