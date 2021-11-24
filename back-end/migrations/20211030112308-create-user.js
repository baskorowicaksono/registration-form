'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
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
      jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pekerjaan: {
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
      tipe_kelas: {
        type: DataTypes.STRING,
        allowNull: false
      },
      media_info: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tujuan: {
        type: DataTypes.STRING,
        allowNull: false
      },
      minat: {
        type:DataTypes.STRING,
        allowNull: false
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,          // 0 for not deleted, 1 for soft deleted data
        allowNull: false,
        defaultValue: 0
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
    return queryInterface.dropTable('users');
  }
};