import db from "./db"

const create_table = async () => {
	var sql = `CREATE TABLE IF NOT EXISTS users (
        		id INT AUTO_INCREMENT PRIMARY KEY,
        		name VARCHAR(255) unique Not NULL,
        		email VARCHAR(255) unique Not NULL,
        		password VARCHAR(255) Not NULL
        		)`
	var result = await db(sql)
	return result
}

create_table()

export default db
