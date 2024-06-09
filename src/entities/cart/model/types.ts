import { Prompt } from "@/entities/prompt";

export interface CartItem {
    includeInOrder: boolean;
    createdAt: string;
    prompt: Prompt;
}

export interface Cart {
    cartItems: CartItem[];
}
