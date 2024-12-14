import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.NEWSLETTER_MYSQL_HOST,
    port: process.env.NEWSLETTER_MYSQL_PORT,
    database: process.env.NEWSLETTER_MYSQL_DATABASE,
    user: process.env.NEWSLETTER_MYSQL_USER,
    password: process.env.NEWSLETTER_MYSQL_PASSWORD
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}