import {IOrder, Order} from "@/class/Order";
import {KCUser} from "@/lib/method/KCUser";
import {QueryEdit} from "@/lib/query/querybuilder/QueryEdit";
import {QueryInsert} from "@/lib/query/querybuilder/QueryInsert";
import {QuerySelect} from "@/lib/query/querybuilder/QuerySelect";
import {orderStatus} from "../../data";

export class KCOrder {
    private static table: string = "booking"

    static async processObjects(data: any) {
        const result: Order[] = await Promise.all(data.map(async (item: any) => {
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
        values.set("status", 1)
        values.set("picture", order.getPicture())

        const query = new QueryInsert(this.table, values)
        return await query.execute()
    }

    static async editStatus(order: Order) {
        const query = new QueryEdit(this.table)
        query.value("status", order.getStatus())

        query.where("id").equal(order.getId())

        return <number>await query.execute()
    }

    static async edit(order: Order) {
        const query = new QueryEdit(this.table)
        query.value("owner", order.getOwner()?.getId())
        query.value("catsitter", order.getCatSitter()?.getId())
        query.value("address", order.getAddress())
        query.value("datestart", order.getDateStart())
        query.value("dateend", order.getDateEnd())
        query.value("additional", order.getAdditional())
        query.value("note", order.getNote())
        query.value("feedback", order.getFeedback())
        query.value("total", order.getTotal())
        query.value("picture", order.getPicture())

        query.where("id").equal(order.getId())

        return <number>await query.execute()
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

    static async getArchiveOrdersOwner(catsitterId: number) {
        const query = new QuerySelect(this.table)
        query.where("owner").equal(catsitterId)
        query.where("status").notEqual(orderStatus._1_PENDING)
        query.where("status").notEqual(orderStatus._2_PAID)
        query.where("status").notEqual(orderStatus._3_CONFIRMED)
        query.where("status").notEqual(orderStatus._4_COMPLETED)
        const result = <IOrder[]>await query.execute()

        if (result)
            return (await this.processObjects(result))
        else
            return null
    }

    static async getArchiveOrdersCatSitter(catsitterId: number) {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(catsitterId)
        query.where("status").equal(orderStatus._6_CLOSED)
        const result = <IOrder[]>await query.execute()

        if (result)
            return (await this.processObjects(result))
        else
            return null
    }

    static async getActiveOrderOwner(ownerId: number) {
        const query = new QuerySelect(this.table)
        query.where("owner").equal(ownerId)
        query.where("status").notEqual(orderStatus._6_CLOSED)
        query.where("status").notEqual(orderStatus._5_REVIEWED)
        const result = <IOrder[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }

    static async getActiveOrderCatSitter(catsitterId: number) {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(catsitterId)
        query.where("status").notEqual(orderStatus._1_PENDING)
        query.where("status").notEqual(orderStatus._6_CLOSED)
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

        if (result)
            return this.processObjects(result)
        else
            return null
    }

    static async getAllByOwner(ownerId: number) {
        const query = new QuerySelect(this.table)
        query.where("owner").equal(ownerId)
        const result = <IOrder[]>await query.execute()

        if (result)
            return (await this.processObjects(result))
        else
            return null
    }
}
