'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_jabatan = sequelize.define('master_jabatan', {
    kode_jabatan: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama_jabatan: DataTypes.STRING,
    nilai_jabatan: DataTypes.INTEGER,
    id_type_jabatan: DataTypes.INTEGER,
    nama_pendek_jabatan: DataTypes.STRING,
    kode_unit: DataTypes.INTEGER,
    status_aktif_jabatan: DataTypes.INTEGER,
    tanggal_jabatan_mulai: DataTypes.DATEONLY,
    tanggal_jabatan_selesai: DataTypes.DATEONLY,
    kode_jenis_jabatan: DataTypes.STRING,
    created_by: DataTypes.STRING,
    created_date: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    modified_date: DataTypes.DATE
  }, {
    underscored: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'master_jabatan'
  });
  master_jabatan.removeAttribute('id')
  master_jabatan.associate = function(models) {
    // associations can be defined here
  };
  return master_jabatan;
};