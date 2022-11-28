const ejs = require("ejs");
const { sendEmail } = require("../Helpers/email");
const sql = require("mssql");
require("dotenv").config();
const sqlConfig = require("../confing/index");
const welcomeMail = async () => {
  const pool = await sql.connect(sqlConfig);
  const users = await (await pool.request().execute("insertWelcome")).recordset;
  console.log(users);
  for (let user of users) {
    ejs.renderFile(
      "Templates/welcom.ejs",
      { name: user.user_name },
      async (error, data) => {
        const messageOptions = {
          from: "ekipmurkor@gmail.com",
          to: user.email,
          subject: "Welcome to our website",
          html: data,
        };

        try {
          let email = user.email;
          await sendEmail(messageOptions);
          await pool.request().input("email", email).execute("updateEmail");
          console.log("Email sent");
        } catch (error) {
          console.log(error);
        }
      }
    );
  }
};

module.exports = { welcomeMail };
