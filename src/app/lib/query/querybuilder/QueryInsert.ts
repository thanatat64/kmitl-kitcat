import {Connection} from "@/lib/database/Connection"
import {Statement} from "@/lib/query/Statement"

export class QueryInsert {
    private readonly table: string
    private vals: Map<string, any> = new Map<string, any>()

    constructor(table: string, vals: Map<string, any>) {
        this.table = table
        this.vals = vals
    }
    async execute() {
        try {
            const query = await this.build()
            const database = Connection.getDatabase()

            return new Promise((resolve, reject) => {
                database.run(query, [], function (error) {
                    if (error) {
                        console.error(error)
                        reject(error)
                    } else {
                        resolve(this.lastID)
                    }
                })
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    private async build(): Promise<string> {
        const fieldNames = await Statement.getFieldNames(this.table)
        fieldNames.shift()
        if (this.vals.size !== fieldNames.length)
            return ""

        const build = `INSERT INTO \`${this.table}\` `
        const fieldNamesString = fieldNames.join(", ")
        const valuesString = Array.from(this.vals.values()).map(value => `"${value}"`).join(", ")

        return `${build}(${fieldNamesString}) values (${valuesString})`
    }
}