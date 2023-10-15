import {Connection} from "@/lib/database/Connection"
import * as sqlite3 from "sqlite3"

export class Statement {
    static getFieldNames(table: string): Promise<string[]> {
        const database = Connection.getDatabase()
        return new Promise<string[]>((resolve, reject) => {
            database.all(`PRAGMA table_info(${table})`, (error, rows: any) => {
                if (error)
                    reject(error)
                else {
                    const fieldNames = rows.map((row: any) => row.name)
                    resolve(fieldNames)
                }
            })
        })
    }
    static prepare(query: string, params?: any[]): Promise<sqlite3.Statement> {
        const database = Connection.getDatabase()
        return new Promise<sqlite3.Statement>((resolve, reject) => {
            const statement = database.prepare(query, params, (error: any) => {
                if (error)
                    reject(error)
                else
                    resolve(statement)
            })
        })
    }
    static getEmptyFieldNames(table: string): Promise<{ [fieldName: string]: null }> {
        const database = Connection.getDatabase()
        return new Promise<{ [fieldName: string]: null }>((resolve, reject) => {
            database.all(`PRAGMA table_info(${table})`, (error, rows: any) => {
                if (error)
                    reject(error)
                else {
                    const emptyFields: { [fieldName: string]: null } = {}
                    rows.forEach((row: any) => {
                        emptyFields[row.name] = null
                    })
                    resolve(emptyFields)
                }
            })
        })
    }
}