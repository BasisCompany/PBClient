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

export interface Device {
    ip: string;
    id: number;
    city: string;
    device: string;
    client: string;
    platform: string;
    lastLogin: string;
}
