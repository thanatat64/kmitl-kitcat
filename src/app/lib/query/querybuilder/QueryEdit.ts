import { Connection } from '@/lib/database/Connection'

export class QueryEdit {
    private table: string
    private data: any

    constructor(table: string) {
        this.table = table
    }

    private async build(): Promise<string> {
        const build = 'UPDATE '+ this.table +' SET name=?,email=?,telephone=? WHERE id=? '

        return build
    }

    public async setData(id: Number, name: string, email: string, telephone: string): Promise<any> {
        this.data = {
            id: String(id),
            name: name,
            email: email,
            telephone: telephone
        }
    }

    async execute() {
        try {
            const query = await this.build()
            const database = Connection.getDatabase()
            const param = [this.data.name, this.data.email, this.data.telephone, this.data.id]

            return new Promise((resolve, reject) => {
                database.run(query, param, function (error) {
                    if (error) {
                        console.error(error)
                        reject(error)
                    } else {
                        resolve(0)
                    }
                })
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}