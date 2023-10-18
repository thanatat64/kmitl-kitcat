import {IReview, Review} from "@/class/Review";
import {KCUser} from "@/lib/method/KCUser";
import {QueryInsert} from "@/lib/query/querybuilder/QueryInsert";
import {QuerySelect} from "@/lib/query/querybuilder/QuerySelect";

export class KCReview {
    private static table: string = "review"

    static async processObjects(data: any) {
        const result: Review[] = await Promise.all(data.map(async (item: any) => {
            return this.processObject(item)
        }))

        return result
    }

    static async processObject(data: any) {
        const reviewer = await KCUser.get(data.reviewer)
        const catsitter = await KCUser.get(data.catsitter)
        return new Review(
            data.id,
            catsitter,
            reviewer,
            data.rating,
            data.review,
        )
    }

    static async add(review: Review) {
        const values = new Map<string, any>()
        values.set("catsitter", review.getCatSitter()?.getId())
        values.set("reviewer", review.getReviewer()?.getId())
        values.set("rating", review.getRating())
        values.set("review", review.getReview())

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
        const result = <IReview[]>await query.execute()

        if (result.length != 0)
            return (await this.processObjects(result))[0]
        else
            return null
    }

    static async getAllByCatSitter(catsitterId: number) {
        const query = new QuerySelect(this.table)
        query.where("catsitter").equal(catsitterId)
        const result = <IReview[]>await query.execute()

        if (result)
            return this.processObjects(result)
        else
            return null
    }


    static async getAllByReviewer(reviewer: number) {
        const query = new QuerySelect(this.table)
        query.where("reviewer").equal(reviewer)
        const result = <IReview[]>await query.execute()

        if (result)
            return this.processObjects(result)
        else
            return null
    }
}
