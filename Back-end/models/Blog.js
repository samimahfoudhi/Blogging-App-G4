module.exports = (sequelize, Datatype) => {
  const Blog = sequelize.define("Blog", {
    title: {
      type: Datatype.STRING,

      allowNull: false,
    },
    image: {
      type: Datatype.STRING,
      allowNull: true,
    },
    content: {
      type: Datatype.TEXT,
      allowNull: false,
    },
  });

  Blog.associate = (models) => {
    Blog.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  return Blog;
};
