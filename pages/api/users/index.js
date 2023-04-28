import excuteQuery from "@lib/db";
import moment from "moment";

export default async (req) => {
  const date = new Date();

  try {
    const result = await excuteQuery({
      query: `INSERT INTO users(id, email, date) VALUES(null, '${req.body.email}', '${moment(date).locale("en").format('YYYY-MM-DD HH:mm:ss')}')`,
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};