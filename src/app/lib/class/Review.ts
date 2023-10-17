import {IUser, User} from "./User";

export interface IReview {
    id: number;
    catsitter: IUser;
    reviewer: IUser;
    rating: number;
    review: string;
}

export class Review {
    private id: number;
    private catsitter: User;
    private reviewer: User;
    private rating: number;
    private review: string;

    constructor(
        id: number,
        catsitter: User,
        reviewer: User,
        rating: number,
        review: string,
    ) {
        this.id = id;
        this.catsitter = catsitter;
        this.reviewer = reviewer;
        this.rating = rating;
        this.review = review;
    }

    getId(): number { return this.id; }
    setId(id: number): void { this.id = id; }

    getCatSitter(): User { return this.catsitter; }
    setCatSitter(catsitter: User): void { this.catsitter = catsitter; }

    getReviewer(): User { return this.reviewer; }
    setReviewer(reviewer: User): void { this.reviewer = reviewer; }

    getRating(): number { return this.rating; }
    setRating(rating: number): void { this.rating = rating; }

    getReview(): string { return this.review; }
    setReview(review: string): void { this.review = review; }
}