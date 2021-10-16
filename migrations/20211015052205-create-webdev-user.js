'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('webdev_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      no_hp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pekerjaan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tempat_kerja: {
        type: DataTypes.STRING,
        allowNull: false
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      tahu_info: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tujuan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      harapan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('webdev_users');
  }
};