import {Connection} from "@/lib/database/Connection"

export class QueryEdit {
    private readonly table: string
    private readonly conditions: string[]
    private readonly setValues: { [key: string]: any }

    constructor(table: string) {
        this.table = table
        this.conditions = []
        this.setValues = {}
    }

    where(column: string): QueryEdit {
        this.conditions.push(`${column}`)
        return this
    }

    equal(value: any): QueryEdit {
        this.conditions[this.conditions.length - 1] += ` = "${value}"`
        return this
    }

    notEqual(value: any): QueryEdit {
        this.conditions[this.conditions.length - 1] += ` != "${value}"`
        return this
    }

    value(column: string, newValue: any): QueryEdit {
        this.setValues[column] = newValue
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
        const setClauses = Object.entries(this.setValues)
            .map(([column, value]) => `${column} = "${value}"`)
            .join(", ")
        const build = `UPDATE ${this.table}
                             SET ${setClauses} ${conditionStr}`

        return Promise.resolve(build)
    }
}