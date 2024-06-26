export interface Prompt {
    id: number;
    title: string;
    url: string;
    price: number;
    isFavorite?: boolean;
    isInCart?: boolean;
}
