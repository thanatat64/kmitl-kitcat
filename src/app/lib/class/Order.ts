import { User } from "./User"

export class Order {
    private id: number
    private owner: User
    private catsitter: User
    private address: string
    private date: Date
    private additional: string
    private total: number
    private status: string

    constructor(
        id: number,
        owner: User,
        catsitter: User,
        address: string,
        date: Date,
        additional: string,
        total: number,
        status: string,
    ) {
        this.id = id
        this.owner = owner
        this.catsitter = catsitter
        this.address = address
        this.date = date
        this.additional = additional
        this.total = total
        this.status = status
    }

    getId(): number { return this.id }
    setId(id: number): void { this.id = id }

    getOwner(): User { return this.owner }
    setOwner(owner: User): void { this.owner = owner }
}