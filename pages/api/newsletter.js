import excuteQuery from "@lib/db/newsletter";
import moment from "moment";

export default async function handler(req, res) {
  const date = new Date();
  const body = JSON.parse(req.body);

  const result = await excuteQuery({
    query: `INSERT INTO users(id, email, date) VALUES(null, '${body.email}', '${moment(date).locale("en").format('YYYY-MM-DD HH:mm:ss')}')`,
  });

  if (result.error?.code === "ER_DUP_ENTRY") {
    return res.status(500).end();
  } else {
    return res.status(200).end();
  }
};