import { User } from "./User"

export class Token {
    private id: number
    private token: string
    private owner: User

    constructor(
        id: number,
        token: string,
        owner: User,
    ) {
        this.id = id
        this.token = token
        this.owner = owner
    }

    getId(): number { return this.id }
    setId(id: number): void { this.id = id }

    getToken(): string { return this.token }
    setToken(token: string): void { this.token = token }

    getOwner(): User { return this.owner }
    setOwner(owner: User): void { this.owner = owner }
}