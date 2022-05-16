import mysql from "mysql2/promise"

async function db(sql: any) {
	const connection = await mysql.createConnection({
		host: "localhost",
		user: "longhasu",
		password: "quan3112",
		database: "test"
	})
	const [results] = await connection.execute(sql)
	return results
}

export default db
