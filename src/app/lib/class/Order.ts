import {IUser, User} from "./User"

export interface IOrder {
    id: number;
    owner: IUser;
    catsitter: IUser;
    address: string;
    dateStart: string;
    dateEnd: string;
    additional: string;
    note: string;
    feedback: string;
    total: number;
    status: number;
    picture: string;
}

export class Order {
    private id: number;
    private owner: User | null;
    private catsitter: User | null;
    private address: string;
    private dateStart: string;
    private dateEnd: string;
    private additional: string;
    private note: string;
    private feedback: string;
    private total: number;
    private status: number;
    private picture: string;

    constructor(
        id: number,
        owner: User | null,
        catsitter: User | null,
        address: string,
        dateStart: string,
        dateEnd: string,
        additional: string,
        note: string,
        feedback: string,
        total: number,
        status: number,
        picture: string,
    ) {
        this.id = id;
        this.owner = owner;
        this.catsitter = catsitter;
        this.address = address;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.additional = additional;
        this.note = note;
        this.feedback = feedback;
        this.total = total;
        this.status = status;
        this.picture = picture;
    }

    getId(): number { return this.id; }
    setId(id: number): void { this.id = id; }

    getOwner(): User | null { return this.owner; }
    setOwner(owner: User | null): void { this.owner = owner; }

    getCatSitter(): User | null { return this.catsitter; }
    setCatSitter(catsitter: User | null): void { this.catsitter = catsitter; }

    getAddress(): string { return this.address; }
    setAddress(address: string): void { this.address = address; }

    getDateStart(): string { return this.dateStart; }
    setDateStart(date: string): void { this.dateStart = date; }

    getDateEnd(): string { return this.dateEnd; }
    setDateEnd(date: string): void { this.dateEnd = date; }

    getAdditional(): string { return this.additional; }
    setAdditional(additional: string): void { this.additional = additional; }

    getNote(): string { return this.note; }
    setNote(note: string): void { this.note = note; }

    getFeedback(): string { return this.feedback; }
    setFeedback(feedback: string): void { this.feedback = feedback; }

    getTotal(): number { return this.total; }
    setTotal(total: number): void { this.total = total; }

    getStatus(): number { return this.status; }
    setStatus(status: number): void { this.status = status; }

    getPicture(): string { return this.picture; }
    setPicture(picture: string): void { this.picture = picture; }
}