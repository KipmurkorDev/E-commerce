const sqlConfig = require("../Config/config");
const sql = require("mssql");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
  try {
    const { email, user_password } = req.body;
    const pool = await sql.connect(sqlConfig);
    const user = await (
      await pool.request().input("email", email).execute("getUser")
    ).recordset[0];
    if (user) {
      const confirmpassword = await bcrypt.compare(
        user_password,
        user.user_password
      );
      if (confirmpassword) {
        const token = jwt.sign({email:user.email, user_password:user.user_password},process.env.SECRET, {expiresIn:'2h'})
        return res.status(201).json( token);
      } 
      else {
        return res.status(400).json({ message: "wrong  password" });
      }
      
    }
    else{
      return res.status(400).json({ message: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { user_name, email, user_password } = req.body;
    const pool = await sql.connect(sqlConfig);
    const hashpaword = await bcrypt.hash(user_password, 8);
    await pool
      .request()
      .input("user_name", user_name)
      .input("email", email)
      .input("user_password", hashpaword)
      .execute("addUser");
    return res.status(201).json({ message: "User Added Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signin,
  signup,
};
