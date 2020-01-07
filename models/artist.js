'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artists', {
    name: DataTypes.STRING,
  }, {});
  artist.associate = function(models) {
 
    artist.hasMany(models.albums,{
      as:'albums',
      foreignKey:'artist_id'
    })
  };
  return artist;
};