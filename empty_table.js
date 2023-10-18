const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('kitcat.db', (err) => {
	if (err) {
		console.error('SQLite connection error: ', err)
	} else {
		console.log('Connected to SQLite database')
	}
})

if (process.argv[2]) {
// Get the table name from the command line argument
	const tableName = process.argv[2]

// Delete all rows from the table
	db.run(`DELETE
          FROM ${tableName}`, (err) => {
		if (err) {
			console.error('SQLite table deletion error: ', err.message)
		} else {
			console.log(`Table ${tableName} emptied successfully`)
		}
	})

} else {
// Get a list of all tables in the database
	db.all('SELECT name FROM sqlite_master WHERE type = "table"', (err, rows) => {
		if (err) {
			console.error('SQLite table listing error: ', err.message)
		} else {
			// Print the names of all tables
			console.log('Tables available to empty:')
			rows.forEach((row) => {
				console.log("-", row.name)
			})
		}
	})
}

// Close the SQLite database connection
db.close((err) => {
	if (err) {
		console.error('SQLite connection closure error: ', err.message)
	} else {
		console.log('SQLite database connection closed')
	}
})
