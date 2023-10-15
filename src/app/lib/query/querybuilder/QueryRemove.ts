import { Connection } from "@/lib/database/Connection" 

export class QueryRemove {
    private table: string 
    private conditions: string[] 

    constructor(table: string) {
        this.table = table 
        this.conditions = [] 
    }

    where(column: string): QueryRemove {
        this.conditions.push(`WHERE ${column}`) 
        return this 
    }

    equal(value: any): QueryRemove {
        this.conditions[this.conditions.length - 1] += ` = "${value}"` 
        return this 
    }

    private async build(): Promise<string> {
        const conditionStr = this.conditions.join(" ") 
        const build = `DELETE FROM ${this.table} ${conditionStr}` 

        return Promise.resolve(build) 
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
}