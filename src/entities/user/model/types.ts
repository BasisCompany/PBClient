export enum Gender {
    NOT_SPECIFIED = "NOT_SPECIFIED",
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export interface User {
    id: number;
    email: string;
    username: string;
}

export interface UserProfile {
    id: number;
    username: string;
    gender: Gender;
    about: string | null;
    avatar?: string;
    banner?: string;
}

export interface UserDetails {
    id: number;
    email: string;
    username: string;
    roles: string[];
    thumb?: string;
}

export interface Device {
    ip: string;
    id: number;
    city: string;
    device: "desktop" | "smartphone" | "tablet";
    client: string;
    platform: string;
    lastLogin: string;
}
