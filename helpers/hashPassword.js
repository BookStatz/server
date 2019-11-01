const bcryptjs = require('bcryptjs')

function hashPassword(password) {
    const saltRounds = 10
    const hashPassword = bcryptjs.hashSync(password, saltRounds)
    return hashPassword
}

module.exports = hashPassword