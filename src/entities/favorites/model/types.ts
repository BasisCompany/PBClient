import { Prompt } from "@/entities/prompt";

export interface FavoritesItem {
    createdAt: string;
    prompt: Prompt;
}

export interface Favorites {
    favoritesItems: FavoritesItem[];
}
