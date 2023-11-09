module.exports = (sequelize, Datatype) => {
  const User = sequelize.define("User", {
    email: {
      type: Datatype.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Datatype.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Blog, {
      onDelete: "cascade",
    });
    User.hasOne(models.Profil, {
      onDelete: "cascade",
    });
  };
  return User;
};
