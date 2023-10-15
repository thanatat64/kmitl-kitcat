export interface IUser {
    id: number
    name: string
    email: string
    password: string
    telephone: string
    address1: string
    address2: string
    address3: string
    picture: string
    catsitter: boolean
}

export class User {
    private id: number
    private name: string
    private email: string
    private password: string
    private telephone: string
    private address1: string
    private address2: string
    private address3: string
    private picture: string
    private catsitter: boolean

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        telephone: string,
        address1: string,
        address2: string,
        address3: string,
        picture: string,
        catsitter: boolean,
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.telephone = telephone
        this.address1 = address1
        this.address2 = address2
        this.address3 = address3
        this.picture = picture
        this.catsitter = catsitter
    }

    getId(): number { return this.id }
    setId(id: number): void { this.id = id }

    getName(): string { return this.name }
    setName(name: string): void { this.name = name }

    getEmail(): string { return this.email }
    setEmail(email: string): void { this.email = email }

    getPassword(): string { return this.password }
    setPassword(password: string): void { this.password = password }

    getTelephone(): string { return this.telephone }
    setTelephone(telephone: string): void { this.telephone = telephone }

    getAddress1(): string { return this.address1 }
    setAddress1(address1: string): void { this.address1 = address1 }

    getAddress2(): string { return this.address2 }
    setAddress2(address2: string): void { this.address2 = address2 }

    getAddress3(): string { return this.address3 }
    setAddress3(address3: string): void { this.address3 = address3 }

    getPicture(): string { return this.picture }
    setPicture(picture: string): void { this.picture = picture }

    isCatSitter(): boolean { return this.catsitter }
    setCatSitter(catsitter: boolean): void { this.catsitter = catsitter }
}