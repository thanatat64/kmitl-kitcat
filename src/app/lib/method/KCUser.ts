import { User } from "@/class/User" 
import { QuerySelect } from "@/lib/query/querybuilder/QuerySelect" 
import { QueryInsert } from "@/lib/query/querybuilder/QueryInsert" 
import { KCToken } from "./KCToken" 
import { Token } from "../class/Token" 

export class KCUser {
    private static table: string = "user"
    private static signIn: User|null = null

    static getSignInUser() {
        return this.signIn
    }

    static async processObjects(data: any) {
        const result: User[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item) 
          })) 

        return result
    }

    static async processObject(data: any) {
        return new User(
            data.id,
            data.name,
            data.email,
            data.password,
            data.telephone,
            data.address,
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
        values.set("address", user.getAddress())
        values.set("catsitter", user.isCatSitter())

        const query = new QueryInsert(this.table, values)
        const result = await query.execute()
        return result
    }

    static async isDuplicateUser(user: User) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(user.getEmail())
        const result: any = await query.execute()
        return result.length > 0
    }
    
    static async doSignIn(user: User) {
        KCToken.removeByOwner(user)
        this.signIn = user
    }

    static async doSignOut(user: User) {
        KCToken.removeByOwner(user)
        this.signIn = null
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
        const result = await query.execute()

        if (result)
            return (await this.processObjects(result))[0] 
        else
            return null  
    }

    static async getByEmail(email: string) {
        const query = new QuerySelect(this.table)
        query.where("email").equal(email)
        const result = await query.execute()
        return result
    }
}