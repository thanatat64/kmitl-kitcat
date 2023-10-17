import {IToken, Token} from "@/class/Token"
import {User} from "@/lib/class/User"
import {KCUser} from "@/lib/method/KCUser"
import {QueryInsert} from "@/lib/query/querybuilder/QueryInsert"
import {QueryRemove} from "@/lib/query/querybuilder/QueryRemove"
import {QuerySelect} from "@/lib/query/querybuilder/QuerySelect"

export class KCToken {
    private static table: string = "token"

    static async processObjects(data: any) {
        const result: Token[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item)
        }))

        return result
    }

    static async processObject(data: any) {
        const owner = await KCUser.get(data.owner)
        return new Token(
            data.id,
            owner,
            data.token,
        )
    }

    static async add(token: Token) {
        let randomToken = ""
        do { randomToken = this.generateToken(32) }
        while (await this.isDuplicateToken(randomToken))

        const values = new Map<string, any>()
        values.set("owner", token.getOwner()?.getId())
        values.set("token", randomToken)

        const query = new QueryInsert(this.table, values)
        return await query.execute()
    }

    static generateToken(length: number) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        const charactersLength = characters.length

        const tokenArray = Array.from({length}, () => {
            const randomIndex = Math.floor(Math.random() * charactersLength)
            return characters.charAt(randomIndex)
        })

        return tokenArray.join("")
    }

    static async isDuplicateToken(token: string) {
        const query = new QuerySelect(this.table)
        query.where("token").equal(token)
        const result: any = await query.execute()
        return result.length > 0
    }

    static async removeByOwner(owner: User) {
        const query = new QueryRemove(this.table)
        query.where("owner").equal(owner.getId())
        return await query.execute()
    }

    static async getAll() {
        const query = new QuerySelect(this.table)
        const result = await query.execute()

        if (result)
            return this.processObjects(result)
        else
            return null
    }

    static async get(id: number) {
        const query = new QuerySelect(this.table)
        query.where("id").equal(id)
        const result = <IToken[]> await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }

    static async getByToken(token: string) {
        const query = new QuerySelect(this.table)
        query.where("token").equal(token)
        const result = <IToken[]> await query.execute()

        if (result.length != 0) {
            return (await this.processObjects(result))[0]?.getOwner() ?? null
        } else
            return null
    }

    static async getByOwner(ownerId: number) {
        const query = new QuerySelect(this.table)
        query.where("owner").equal(ownerId)
        const result = <IToken[]> await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }
}