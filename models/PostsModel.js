import { DataTypes } from 'sequelize';

import UsersModel from './UsersModel.js';
import CategoriesModel from './CategoriesModel.js';
import supabase from '../configuration/supabase.js';

const PostsModel = supabase.define('Posts', {
  Id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  Author: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: UsersModel,
      key: 'Id'
    }
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: CategoriesModel,
      key: 'Name'
    }
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Image: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

export default PostsModel;