import {IUser, User} from "./User"

export interface IToken {
    id: number
    owner: IUser
    token: string
}

export class Token {
    private id: number
    private token: string
    private owner: User | null

    constructor(
        id: number,
        owner: User | null,
        token: string,
    ) {
        this.id = id
        this.token = token
        this.owner = owner
    }

    getId(): number { return this.id }
    setId(id: number): void { this.id = id }

    getOwner(): User | null { return this.owner }
    setOwner(owner: User): void { this.owner = owner }

    getToken(): string { return this.token }
    setToken(token: string): void { this.token = token }
}