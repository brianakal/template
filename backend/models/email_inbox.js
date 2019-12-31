'use strict';
module.exports = (sequelize, DataTypes) => {
  const email_inbox = sequelize.define('email_inbox', {
    id_inbox: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_sent: DataTypes.INTEGER,
    no_surat: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.TEXT,
    attachment: DataTypes.TEXT,
    isread: DataTypes.INTEGER,
    isstarred: DataTypes.BOOLEAN,
    labels: DataTypes.STRING,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
      underscored: true,
      freezeTableName: true,
      // define the table's name
      tableName: 'email_inbox',
      timestamps: false,
  });
  email_inbox.associate = function(models) {
    // associations can be defined here
  };
  return email_inbox;
};