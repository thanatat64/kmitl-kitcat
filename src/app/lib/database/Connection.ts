import sqlite3 from "sqlite3"

export class Connection {
    private static databaseFile: string = "kitcat.db"
    private static connection: sqlite3.Database|null = null

    static getDatabase(): sqlite3.Database {
        return this.getConnection()
    }

    private static getConnection(): sqlite3.Database {
        if (this.connection != null)
            return this.connection
        
        const connection = new sqlite3.Database(this.databaseFile, (error) => {
            if (error)
                console.error("SQLite connection error: ", error.message)
            else
                console.log(`[SUCCESS] Connected to SQLite database "${this.databaseFile}"`)
        })
        
        this.connection = connection
        return this.connection
    }
}