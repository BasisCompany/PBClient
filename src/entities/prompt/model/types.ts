export interface Prompt {
    id: number;
    title: string;
    url: string;
    price: number;
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
