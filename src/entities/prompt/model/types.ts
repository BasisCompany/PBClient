export interface Prompt {
    id: number;
    title: string;
    url: string;
    price: number;
    views: number;
    rating: number;
    favorites: number;
    createdAt: Date;
    updatedAt: Date;
    hasImages: boolean;
    aIModel: {
        name: string;
        logo: string;
    };
    isFavorite?: boolean;
    isInCart?: boolean;
}

export type PromptTitle = Pick<Prompt, "id" | "title" | "url">;
