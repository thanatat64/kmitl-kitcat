export class User {
    private id: number
    private name: string
    private email: string
    private password: string
    private telephone: string
    private address: string

    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        telephone: string,
        address: string,
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.telephone = telephone
        this.address = address
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

    getAddress(): string { return this.address }
    setAddress(address: string): void { this.address = address }
}