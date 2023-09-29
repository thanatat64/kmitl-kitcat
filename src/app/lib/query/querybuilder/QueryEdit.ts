import { Connection } from '@/lib/database/Connection'

export class QueryEdit {
    private table: string
    private userData: any
    private userPassword: any

    constructor(table: string) {
        this.table = table
    }

    private async buildData(): Promise<string> {
        const buildData = 'UPDATE '+ this.table +' SET name=?,email=?,telephone=? WHERE id=? '

        return buildData
    }
    
    private async buildPassword(): Promise<string> {
        const buildPassword = 'UPDATE '+ this.table +' SET password=? WHERE id=? '

        return buildPassword
    }

    public async setData(id: Number, name: string, email: string, telephone: string): Promise<any> {
        this.userData = {
            id: String(id),
            name: name,
            email: email,
            telephone: telephone
        }
    }
    
    public async setPassword(id: Number, newPassword: string): Promise<any> {
        this.userPassword = {
            id: String(id),
            password: newPassword
        }
    }

    async executeData() {
        try {
            const query = await this.buildData()
            const database = Connection.getDatabase()
            const param = [this.userData.name, this.userData.email, this.userData.telephone, this.userData.id]

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

    async executePassword() {
        try {
            const query = await this.buildPassword()
            const database = Connection.getDatabase()
            const param = [this.userPassword.password,this.userPassword.id]

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