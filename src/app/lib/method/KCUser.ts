import {IUser, User} from "@/class/User"
import {KCOrder} from "@/lib/method/KCOrder";
import {QueryInsert} from "@/lib/query/querybuilder/QueryInsert"
import {QuerySelect} from "@/lib/query/querybuilder/QuerySelect"
import {QueryEdit} from "../query/querybuilder/QueryEdit"
import {KCToken} from "./KCToken"

export class KCUser {
    private static table: string = "user"

    static async processObjects(data: IUser[]) {
        const result: User[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item)
        }))
        return result
    }

    static async processObject(data: IUser) {
        return new User(
            data.id,
            data.name,
            data.email,
            data.password,
            data.telephone,
            data.address1,
            data.address2,
            data.address3,
            data.picture,
            data.catsitter,
        )
    }

    static async add(user: User) {
        const isDuplicated = await this.isDuplicateUser(user)
        if (isDuplicated)
            return -1

        const values = new Map<string, any>()
        values.set("name", user.getName())
        values.set("email", user.getEmail())
        values.set("password", user.getPassword())
        values.set("telephone", user.getTelephone())
        values.set("address1", user.getAddress1())
        values.set("address2", user.getAddress2())
        values.set("address3", user.getAddress3())
        values.set("picture", user.getPicture())
        values.set("catsitter", user.isCatSitter())

        const query = new QueryInsert(this.table, values)
        return <number>await query.execute()
    }

    static async edit(user: User) {
        const query = new QueryEdit(this.table)
        query.value("name", user.getName())
        query.value("email", user.getEmail())
        query.value("password", user.getPassword())
        query.value("telephone", user.getTelephone())
        query.value("address1", user.getAddress1())
        query.value("address2", user.getAddress2())
        query.value("address3", user.getAddress3())
        query.value("picture", user.getPicture())
        query.value("catsitter", user.isCatSitter())

        query.where("id").equal(user.getId())

        return <number>await query.execute()
    }

    static async isDuplicateUser(user: User) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(user.getEmail())
        const result = <IUser[]>await query.execute()

        let isDuplicated = result.length > 0

        if (result) {
            const users = await this.processObjects(result)
            users.forEach((userLoop) => {
                if (userLoop.getId() === user.getId())
                    isDuplicated = false
            })
        }
        return isDuplicated
    }

    static async clearToken(user: User) {
        await KCToken.removeByOwner(user)
    }

    static async getAll() {
        const query = new QuerySelect(this.table)
        const result = <IUser[]>await query.execute()

        if (result)
            return this.processObjects(result)
        else
            return null
    }

    static async getAllCatSitters() {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(true)

        const result = <IUser[]>await query.execute()

        if (result)
            return this.processObjects(result)
        else
            return null
    }

    static async getAllCatSittersFree() {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(true)

        const result = <IUser[]>await query.execute()
        const catsitters = await this.processObjects(result)

        let catsittersFree: User[] = []
        for (const catsitter of catsitters) {
            const result = await KCOrder.getActiveOrderCatSitter(catsitter.getId())
            if (result === null)
                catsittersFree.push(catsitter)
        }
        return catsittersFree
    }

    static async get(id: number) {
        const query = new QuerySelect(this.table)
        query.where("id").equal(id)
        const result = <IUser[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }

    static async getByEmail(email: string) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(email)
        const result = <IUser[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }
}