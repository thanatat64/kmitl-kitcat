const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('kitcat.db', (err) => {
	if (err) {
		console.error('SQLite connection error: ', err)
	} else {
		console.log('Connected to SQLite database')
	}
})

db.run(`
	CREATE TABLE IF NOT EXISTS token (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		owner_id INTEGER NOT NULL,
		token TEXT NOT NULL
	)
`, (err) => {
	if (err) {
		console.error('SQLite table creation error: ', err.message)
	} else {
		console.log('Table creation successfully')
	}
})

db.close((err) => {
	if (err) {
		console.error('SQLite connection closure error: ', err.message)
	} else {
		console.log('SQLite database connection closed')
	}
})
