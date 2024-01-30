module.exports = (sequelize, dataTypes) => {
  const alias = 'Brand';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    name: dataTypes.STRING(100),
  };
  const config = {
    tableName: 'brands',
    timestamps: false,
  };

  const Brand = sequelize.define(alias, cols, config);

  Brand.associate = function (models) {
    Brand.hasMany(models.Product, {
      as: 'product',
      foreignKey: 'brand_id',
    });
  };

  return Brand;
};
