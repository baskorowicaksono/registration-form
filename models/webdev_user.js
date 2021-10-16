'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class webdev_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return {...this.get(), id: undefined};
    }
  };
  webdev_user.init({
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
    }
  }, {
    sequelize,
    modelName: 'webdev_user',
  });
  return webdev_user;
};