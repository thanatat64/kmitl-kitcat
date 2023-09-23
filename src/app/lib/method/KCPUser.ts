import { User } from "@/lib/class/User"

export class KCPUser {
    static processObjects(data: any): User[] {
        let result: User[] = []
        data.forEach((item: any) => {
            result[item.id] = this.processObject(item)
        })
        return result
    }
    static processObject(data: any): User {
        return new User(
            data.id,
            data.name,
            data.email,
            data.password,
            data.telephone,
            data.address,
        )
    }
}