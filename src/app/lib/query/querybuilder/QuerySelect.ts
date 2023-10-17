import {Connection} from "@/lib/database/Connection"

export class QuerySelect {
    private readonly table: string
    private readonly conditions: string[]

    constructor(table: string) {
        this.table = table
        this.conditions = []
    }

    where(column: string): QuerySelect {
        this.conditions.push(`${column}`)
        return this
    }

    equal(value: any): QuerySelect {
        this.conditions[this.conditions.length - 1] += ` = "${value}"`
        return this
    }

    notEqual(value: any): QuerySelect {
        this.conditions[this.conditions.length - 1] += ` != "${value}"`
        return this
    }

    private async build(): Promise<string> {
        const conditionStr = `WHERE ${this.conditions.join(" AND ")}`
        const build = `SELECT * FROM ${this.table} ${this.conditions.length != 0 ? conditionStr : ""}`

        return Promise.resolve(build)
    }

    async execute() {
        try {
            const query = await this.build()
            const database = Connection.getDatabase()

            return new Promise((resolve, reject) => {
                database.all(query, [], (error, rows) => {
                    if (error) {
                        console.error(error)
                        reject(error)
                    } else {
                        resolve(rows)
                    }
                })
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}