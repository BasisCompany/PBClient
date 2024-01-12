export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export interface User {
    id: number;
    email: string;
    username: string;
}

export interface UserAbout {
    id: number;
    username: string;
    gender: Gender | null;
    avatar?: string;
}
