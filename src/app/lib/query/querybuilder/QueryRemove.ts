import {Connection} from "@/lib/database/Connection"

export class QueryRemove {
    private readonly table: string
    private readonly conditions: string[]

    constructor(table: string) {
        this.table = table
        this.conditions = []
    }

    where(column: string): QueryRemove {
        this.conditions.push(`${column}`)
        return this
    }

    equal(value: any): QueryRemove {
        this.conditions[this.conditions.length - 1] += ` = "${value}"`
        return this
    }

    notEqual(value: any): QueryRemove {
        this.conditions[this.conditions.length - 1] += ` != "${value}"`
        return this
    }

    async execute() {
        try {
            const query = await this.build()
            const database = Connection.getDatabase()

            return new Promise((resolve, reject) => {
                database.run(query, function (error) {
                    if (error) {
                        console.error(error)
                        reject(error)
                    } else {
                        resolve(this.changes)
                    }
                })
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    private async build(): Promise<string> {
        const conditionStr = `WHERE ${this.conditions.join(" AND ")}`
        const build = `DELETE
                       FROM ${this.table} ${this.conditions.length != 0 ? conditionStr : ""}`

        return Promise.resolve(build)
    }
}