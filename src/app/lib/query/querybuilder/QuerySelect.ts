import { Connection } from '@/lib/database/Connection'
export class QuerySelect {
    private table: string

    constructor(table: string) {
        this.table = table
    }

    private async build(): Promise<string> {
        const build = `SELECT * FROM ${this.table}`;

        return Promise.resolve(build);
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