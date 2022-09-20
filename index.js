const {User, sequelze } = require('./User.js');

console.log("user", User)
async function createUser() {
    try {
        const user1 = await User.create({ name: "Jane", password: "123" });
    }
    catch(err){
        console.log("ERROR:", err)
    }
}

createUser().then(user => console.log(user))

module.exports = createUser;