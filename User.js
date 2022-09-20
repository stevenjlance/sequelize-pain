const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    password: Sequelize.STRING
});
console.log(User, sequelize);
module.exports = {
    User, 
    sequelize
};