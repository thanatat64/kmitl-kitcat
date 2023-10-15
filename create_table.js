const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('kitcat.db', (err) => {
	if (err) {
		console.error('SQLite connection error: ', err)
	} else {
		console.log('Connected to SQLite database')
	}
})

db.run(`
	CREATE TABLE IF NOT EXISTS user (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		email TEXT NOT NULL,
		password TEXT NOT NULL,
		telephone TEXT NOT NULL,
		address1 TEXT NOT NULL,
		address2 TEXT NOT NULL,
		address3 TEXT NOT NULL,
		picture TEXT NOT NULL,
		catsitter BOOL NOT NULL
	)
`, (err) => {
	if (err) {
		console.error('SQLite table creation error: ', err.message)
	} else {
		console.log('User Table creation successfully')
	}
})

db.run(`
	CREATE TABLE IF NOT EXISTS token (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
    owner
    INTEGER
    NOT
    NULL,
		token TEXT NOT NULL
	)
`, (err) => {
	if (err) {
		console.error('SQLite table creation error: ', err.message)
	} else {
		console.log('Token Table creation successfully')
	}
})

db.close((err) => {
	if (err) {
		console.error('SQLite connection closure error: ', err.message)
	} else {
		console.log('SQLite database connection closed')
	}
})
