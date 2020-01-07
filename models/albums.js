'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define('albums', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {});
  albums.associate = function(models) {
    // associations can be defined here
    albums.hasMany(models.song,{
      as:'songs',
      foreignKey: 'album_id'
    }),
     albums.belongsTo(models.artists,{
      as:'artists',
      foreignKey: 'artist_id'
    })
  };
  return albums;
};