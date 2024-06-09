export interface CartCount {
    count: number;
}

export interface AddToOrderRequest {
    promptId: number;
    includeInOrder: boolean;
}

export interface AddAllToOrderRequest {
    includeInOrder: boolean;
}
