'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
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
        type: DataTypes.BOOLEAN,    // nilai 0 laki-laki, nilai 1 perempuan
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
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,         // 0 for not deleted, 1 for soft deleted data
        defaultValue: 0
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};