module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.STRING(255),
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
        },
        password: {
            type: DataTypes.STRING(255),
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
        },
        notify: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        tableName: "Users",
        timestamps: false
    });

    User.associate = function (models) {
    User.belongsToMany(models.Address, {
        through: 'AddressUser',
        foreignKey: 'user_id',
        otherKey: 'address_id',
        as: 'addresses',
    });

    User.belongsTo(models.UserAdmin, {
        foreignKey: 'id',
        as: 'admin'
    });

    User.belongsTo(models.UserCf, {
        foreignKey: 'id',
        as: 'cf'
    });

    User.belongsTo(models.UserMayorista, {
        foreignKey: 'id',
        as: 'mayorista'
    });
};


    return User;
};