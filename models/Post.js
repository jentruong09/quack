const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        dislikes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;