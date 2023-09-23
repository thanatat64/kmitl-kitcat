import { User } from "@/class/User";
import { QuerySelect } from "@/lib/query/querybuilder/QuerySelect";
import { QueryInsert } from "@/lib/query/querybuilder/QueryInsert";

export class KCUser {
    private static table: string = 'user'

    static async add(user: User) {
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

    static async getAll() {
        const query = new QuerySelect(this.table)
        const result = await query.execute()
        return result
    }
}