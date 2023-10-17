import {IOrder, Order} from "@/class/Order";
import {Token} from "@/class/Token";
import {KCUser} from "@/lib/method/KCUser";
import {QueryInsert} from "@/lib/query/querybuilder/QueryInsert";
import {QuerySelect} from "@/lib/query/querybuilder/QuerySelect";

export class KCOrder {
    private static table: string = "order"

    static async processObjects(data: any) {
        const result: Token[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item)
        }))

        return result
    }

    static async processObject(data: any) {
        const owner = await KCUser.get(data.owner)
        const catsitter = await KCUser.get(data.catsitter)
        return new Order(
            data.id,
            owner,
            catsitter,
            data.address,
            data.datestart,
            data.dateend,
            data.additional,
            data.note,
            data.feedback,
            data.total,
            data.status,
            data.picture,
        )
    }

    static async add(order: Order) {
        const values = new Map<string, any>()
        values.set("owner", order.getOwner()?.getId())
        values.set("catsitter", order.getCatSitter()?.getId())
        values.set("address", order.getAddress())
        values.set("datestart", order.getDateStart())
        values.set("dateend", order.getDateEnd())
        values.set("additional", order.getAdditional())
        values.set("note", order.getNote())
        values.set("feedback", order.getFeedback())
        values.set("total", order.getTotal())
        values.set("status", order.getStatus())
        values.set("picture", order.getPicture())

        const query = new QueryInsert(this.table, values)
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
        const result = <IOrder[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }

    static async getAllByCatSitter(catsitterId: number) {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(catsitterId)
        const result = <IOrder[]>await query.execute()

        if (result.length != 0)
            return this.processObjects(result)
        else
            return null
    }

    static async getAllByOwner(ownerId: number) {
        const query = new QuerySelect(this.table)
        query.where("owner").equal(ownerId)
        const result = <IOrder[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))
        else
            return null
    }
}
