const bcrypt = require('bcrypt');

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = { hashPassword };
