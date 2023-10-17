import {IUser, User} from "./User"

export interface IOrder {
    id: number;
    owner: IUser;
    catsitter: IUser;
    address: string;
    date: string;
    additional: string;
    total: number;
    status: string;
    picture: string;
}

export class Order {
    private id: number;
    private owner: User;
    private catsitter: User;
    private address: string;
    private date: Date;
    private additional: string;
    private total: number;
    private status: string;
    private picture: string;

    constructor(
        id: number,
        owner: User,
        catsitter: User,
        address: string,
        date: Date,
        additional: string,
        total: number,
        status: string,
        picture: string,
    ) {
        this.id = id;
        this.owner = owner;
        this.catsitter = catsitter;
        this.address = address;
        this.date = date;
        this.additional = additional;
        this.total = total;
        this.status = status;
        this.picture = picture;
    }

    getId(): number { return this.id; }
    setId(id: number): void { this.id = id; }

    getOwner(): User { return this.owner; }
    setOwner(owner: User): void { this.owner = owner; }

    getCatSitter(): User { return this.catsitter; }
    setCatSitter(catsitter: User): void { this.catsitter = catsitter; }

    getAddress(): string { return this.address; }
    setAddress(address: string): void { this.address = address; }

    getDate(): Date { return this.date; }
    setDate(date: Date): void { this.date = date; }

    getAdditional(): string { return this.additional; }
    setAdditional(additional: string): void { this.additional = additional; }

    getTotal(): number { return this.total; }
    setTotal(total: number): void { this.total = total; }

    getStatus(): string { return this.status; }
    setStatus(status: string): void { this.status = status; }

    getPicture(): string { return this.picture; }
    setPicture(picture: string): void { this.picture = picture; }
}