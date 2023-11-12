module.exports = (sequelize, Datatype) => {
  const Profil = sequelize.define("Profil", {
    firstname: {
      type: Datatype.STRING,
      allowNull: false,
    },
    lastname: {
      type: Datatype.STRING,
      allowNull: false,
    },
    username: {
      type: Datatype.STRING,
      allowNull: false,
    },
    email: {
      type: Datatype.STRING,
      allowNull: false,
    },
    age: {
      type: Datatype.INTEGER,
      allowNull: false,
    },
    country: {
      type: Datatype.STRING,
      allowNull: true,
    },
  });

  return Profil;
};
