import { User } from "@/class/User";
import { QuerySelect } from "@/lib/query/querybuilder/QuerySelect";
import { QueryInsert } from "@/lib/query/querybuilder/QueryInsert";
import { QueryEdit } from "../query/querybuilder/QueryEdit";
import { TbPassword } from "react-icons/tb";

export class KCUser {
    private static table: string = 'user'

    static async add(user: User) {
        const isDuplicated = await this.isDuplicateUser(user)
        if (isDuplicated)
            return -1

        const values = new Map<string, any>()
        values.set('name', user.getName())
        values.set('email', user.getEmail())
        values.set('password', user.getPassword())
        values.set('telephone', user.getTelephone())
        values.set('address', user.getAddress())

        const query = new QueryInsert(this.table, values)
        const result = await query.execute()
        return result
    }

    static async isDuplicateUser(user: User) {
        const query = new QuerySelect(this.table)
        query.where('email').equal(user.getEmail())
        const result: any = await query.execute()
        return result.length > 0
    }

    static async getAll() {
        const query = new QuerySelect(this.table)
        const result = await query.execute()
        return result
    }

    static async get(id: number) {
        const query = new QuerySelect(this.table)
        query.where('id').equal(id)
        const result = await query.execute()
        return result
    }

    static async getByEmail(email: string) {
        const query = new QuerySelect(this.table)
        query.where('email').equal(email)
        const result = await query.execute()
        return result
    }

    static async editData(id:number,name:string,email: string,telephone:string) {
        const query = new QueryEdit(this.table)
        query.setData(id,name,email,telephone)
        const result = await query.executeData()
        return result
    }

    static async editPassword(id:number, password:string, newPassword:string) {
        const query = new QueryEdit(this.table)
        const user = await this.get(id)
        if(password != user[0].password) return -1
        if(newPassword == user[0].password) return -2
        query.setPassword(id,newPassword)
        const result = await query.executePassword()
        return result
    }
}